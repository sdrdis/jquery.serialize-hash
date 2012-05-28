(function($){
  $.fn.serializeHash = function() {
    var hash = {};
    /***
     JQuery plugins that returns a hash from serialization of a form. It supports brakets on input names.
     It is convenient if you want to get values from a form and merge it with an other hash for example.
     Example:
     ---------- HTML ----------
     <form id="form">
       <input type="hidden" name="firstkey" value="val1" />
       <input type="hidden" name="secondkey[0]" value="val2" />
       <input type="hidden" name="secondkey[1]" value="val3" />
       <input type="hidden" name="secondkey[key]" value="val4" />
     </form>
     ---------- JS ----------
     $('#form').serializeHash()
     should return :
     {
       firstkey: 'val1',
       secondkey: {
         0: 'val2',
         1: 'val3',
         key: 'val4'
       }
     }
     ***/
    function stringKey(key, value) {
      var beginBraket = key.lastIndexOf('[');
      if (beginBraket == -1) {
        var hash = {};
        hash[key] = value;
        return hash;
      }
      var newKey = key.substr(0, beginBraket);
      var newValue = {};
      newValue[key.substring(beginBraket + 1, key.length - 1)] = value;
      return stringKey(newKey, newValue);
    }

    var els = $(this).find(':input').get();
    $.each(els, function() {
        if (this.name && !this.disabled && (this.checked || /select|textarea/i.test(this.nodeName) || /text|hidden|password/i.test(this.type))) {
            var val = $(this).val();
            $.extend(true, hash, stringKey(this.name, val));
        }
    });
    return hash;
  };
})(jQuery);