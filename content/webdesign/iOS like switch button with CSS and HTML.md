# iOS like on/off switch button with CSS and HTML

Out there is multiple solution of iOS like on/off switch button, but:

* none of them have that simple HTML as mine
* none of them is pixel perfect (*ok some are* :-) but)
* there is usually missing disabled status
* they look slightly different then switch on iOS
* they do not have labels on left side

<script async src="//jsfiddle.net/OzzyCzech/1rmfho78/embed/result,html,css/dark/"></script>

#### HTML code

```html
<label class="switch">
  <input type="checkbox">
  <span>This is checkbox label</span>
</label>
```

#### SCSS code

```scss
$size: 20px;

div {
  max-width:320px;
  margin: 60px auto;
  background: #fff;
  padding:30px 30px 10px 30px;
  border:1px solid #ddd;
}

.switch {
  position: relative;
  display: block;
  padding-bottom: 20px;
  text-align:left;

  input {
    display: none;
  }

  span:after, span:before {
    position: absolute;
    cursor: pointer;
    content: '';
  }
  
  span:before {
    background-color: #f5f5f5;
    border: 1px solid rgba(0, 0, 0, .1);
    transition: .4s;
    border-radius: 10 * $size;
    width: 2 * $size;
    height: $size;
    right: 0;
  }

  input:checked + span:before {
    background-color: #89c31a;
  }

  input:disabled + span:before {
    background-color: #b9b9b9;
  }
  
  span:after {
    width: $size;
    height: $size;
    background-color: #fff;
    border-radius: 50%;
    transition: .2s;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, .5);
    top: 1px;
    right: $size;
  }

  input:checked + span:after {
    transform: translateX($size);
  }

  input:disabled + span:after {
    background: rgba(255, 255, 255, .6);
  }
}
```

#css 