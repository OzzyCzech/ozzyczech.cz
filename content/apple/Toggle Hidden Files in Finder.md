# Toggle Hidden Files in Finder

Run [Automator](http://en.wikipedia.org/wiki/Automator_(software)) and create new Application. Add task **Run Shell script** and paste follow code:

```shell
STATUS=`defaults read com.apple.finder AppleShowAllFiles`
if [ $STATUS == YES ];
then
    defaults write com.apple.finder AppleShowAllFiles NO
else
    defaults write com.apple.finder AppleShowAllFiles YES
fi
killall Finder
```

Save application. From now can Tooggle

#macOS 