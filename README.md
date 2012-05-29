JQuery plugin that returns a hash from serialization of a form or any dom element. It supports brakets on input names.

It is convenient if you want to get values from a form and merge it with an other hash for example.

** Added by rilinor on 29/05/2012 : jquery serialize hash now support serialization of any dom elements (before, only form were supported). Thanks !

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