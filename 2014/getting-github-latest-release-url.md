<!--
title : Getting GitHub latest release URL
author : Roman OÅ¾ana <ozana@omdesign.cz>
date : 28.9.2014 19:13:04
tags : github, PHP, tip
-->

# Getting GitHub latest release URL

Do you need **Download Latest Version**Â button? Try follow PHP code:

    function getLatestTagUrl($repository, $default = 'master') {
        $file = @json_decode(@file_get_contents("https://api.github.com/repos/$repository/tags", false,
            stream_context_create(['http' => ['header' => "User-Agent: Vestibulum\r\n"]])
        ));
        return sprintf("https://github.com/$repository/archive/%s.zip", $file ? reset($file)->name : $default);
    }
    
    echo getLatestTagUrl('OzzyCzech/vestibulum');
    // will return https://github.com/OzzyCzech/vestibulum/archive/v0.2.1.zip<p</p>