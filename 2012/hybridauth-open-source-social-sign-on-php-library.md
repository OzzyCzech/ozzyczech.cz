<!--
title : HybridAuth – open source social sign on php library
author : Roman Ožana <ozana@omdesign.cz>
date : 12.12.2012 07:52:02
tags : applications, google, MySpace, PHP, Social, twitter
-->

# HybridAuth – open source social sign on php library

HybridAuth is open source sign on library.� HybridAuth enable developers to easily build to engage websites vistors and customers on a social level by implementing social signin, social sharing, users profiles, friends list, activities stream, status updates and more.

HybridAuth goal is to act as an abstract api between your application and various social apis and identities providers such as,, and.

<pre>$config = dirname(__FILE__) . '/library/config.php';
require_once "library/Hybrid/Auth.php";
try{
    $hybridauth = new Hybrid_Auth($config);
    $twitter = $hybridauth-&gt;authenticate("Twitter");
    $user_profile = $twitter-&gt;getUserProfile();
    echo "Hi there! " . $user_profile-&gt;displayName;
    $twitter-&gt;setUserStatus("Hello world!");
    $user_contacts = $twitter-&gt;getUserContacts(); 
} catch(Exception $e) {
   echo "Ooophs, we got an error: " . $e-&gt;getMessage();
}</pre>

Download from http://hybridauth.sourceforge.net/