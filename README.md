#jQuery Serialize Hash plugin

jQuery plugin that returns a hash from serialization of a form or any DOM element. It supports brackets on input names for nested hashes.

It is convenient if you want to get values from a form and merge it with another hash, or anywhere JSON is need. Plays nice with tools like Handlebars.js, Backbone.js or anything else that uses JSON.

#Example:

Here we have a form with traditional `type="text"` input field, an HTML5 `type="email"` input field, and a set of `type="hidden"` input fields making up an embeded hash. It outputs a nicely formatted JSON hash using the name attribute as the key and the value attribute as the value.

##HTML
```html
    <form id="form">
      <input type="text" name="firstkey" value="val1" />
      <input type="email" name="email" value="me@example.com" />
      <input type="hidden" name="secondkey[0]" value="val2" />
      <input type="hidden" name="secondkey[1]" value="val3" />
      <input type="hidden" name="secondkey[key]" value="val4" />
    </form>
```

##Javascript
```js
    $('#form').serializeHash()
```
##Result
```json
    {
      firstkey: 'val1',
      email: 'me@example.com',
      secondkey: {
        0: 'val2',
        1: 'val3',
        key: 'val4'
      }
    }
```

---------------------------------------

#####Added by Rilinor on 29/05/2012:
jQuery serialize hash now support serialization of any dom elements (before, only form were supported). Thanks !
