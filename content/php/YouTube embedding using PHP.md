# YouTube embedding using PHP

The following #PHP code will replace any link to a #YouTube video with an embedded player. Through a single regular expression, it can automatically replace a total of four different URL formats for an embedded video player.

```php
function youtube($string)
{
  return preg_replace(
    '#(http://(www.)?youtube.com)?/(v/|watch\?v\=)([-|~_0-9A-Za-z]+)&?.*?#i',
    '<iframe title="YouTube video player" width="480" height="390" src="http://www.youtube.com/embed/$4" frameborder="0" allowfullscreen></iframe>',
    $string
  );
}

echo youtube('http://www.youtube.com/watch?v=VWsjWCt1PsQ');
echo youtube('http://youtube.com/watch?v=VWsjWCt1PsQ');
echo youtube('http://youtube.com/v/VWsjWCt1PsQ');
echo youtube('http://www.youtube.com/v/VWsjWCt1PsQ');
```