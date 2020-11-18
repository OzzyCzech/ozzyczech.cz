---
title: Show Password button pure Javascript
date: 2016-09-07
tags: [javascript, ux, bootstrap, webdesign]
---

# Show/hide Password button pure Javascript

Pure Javascript solution for show/hide password button near to password input:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<form>
    <div class="mb-3">
        <input type="email" id="email" name="email" class="form-control" placeholder="Your email" autocomplete="email" required/>
    </div>

    <div class="mb-3">
        <div class="input-group">
            <input type="password" id="password" name="password" class="form-control" placeholder="Your password" autocomplete="current-password" required/>

            <label class="input-group-text">
                <input type="checkbox" onclick="(function(el) {
                        el.parentNode.previousElementSibling.type =  el.checked ? 'text' : 'password';
                        el.parentNode.lastElementChild.innerHTML = el.checked ? 'visibility_off' : 'visibility';
                        })(this)" style="display: none"/>
                <i class="material-icons">visibility</i>
            </label>
        </div>

    </div>

    <div class="d-grid">
        <button type="submit" class="btn btn-primary btn-lg">Sign Up</button>
    </div>
</form>
```

```css
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha3/dist/css/bootstrap.min.css");
form { margin:50px auto;max-width:560px;}
```

<script async src="//jsfiddle.net/OzzyCzech/q35p9s7b/105/embed/result,html,css/dark/"></script>