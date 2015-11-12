<!--
title: Hardcore Simple Events Dispatcher for PHP
date: 5.10.2014 21:49:49
author: Roman Ožana <ozana@omdesign.cz>
tags: events, PHP
-->


# Hardcore Simple Events Dispatcher for PHP

Hardcore simple events for PHP with filter, prioritizing, removing handlers and stop propagation. It's even simpler then my previous version https://github.com/OzzyCzech/events.


    <?php
    /**
     * Hardcore simple events for PHP. 
     *
     * @author Roman Ozana <ozana@omdesign.cz>
     */
    
    /** @var array $events */
    $events = [];
    
    /**
     * Return listeners
     *
     * @param $event
     * @return mixed
     */
    function listeners($event) {
      global $events;
      if (isset($events[$event])) {
        ksort($events[$event]);
        return call_user_func_array('array_merge', $events[$event]);
      }
    }
    
    /**
     * Add event listener
     *
     * @param $event
     * @param callable $listener
     * @param int $priority
     */
    function on($event, callable $listener = null, $priority = 10) {
      global $events;
      $events[$event][$priority][] = $listener;
    }
    
    /**
     * Trigger only once.
     *
     * @param $event
     * @param callable $listener
     * @param int $priority
     */
    function once($event, callable $listener, $priority = 10) {
      $onceListener = function () use (&$onceListener, $event, $listener) {
        off($event, $onceListener);
        call_user_func_array($listener, func_get_args());
      };
    
      on($event, $onceListener, $priority);
    }
    
    /**
     * Remove one or all listeners from event.
     *
     * @param $event
     * @param callable $listener
     * @return bool
     */
    function off($event, callable $listener = null) {
      global $events;
      if (!isset($events[$event])) return;
    
      if ($listener === null) {
        unset($events[$event]);
      } else {
        foreach ($events[$event] as $priority => $listeners) {
          if (false !== ($index = array_search($listener, $listeners, true))) {
            unset($events[$event][$priority][$index]);
          }
        }
      }
    
      return true;
    }
    
    /**
     * Trigger events
     *
     * @param $event
     */
    function trigger($event) {
      $args = func_get_args();
      $event = array_shift($args);
    
      foreach ((array)listeners($event) as $listener) {
        if (call_user_func_array($listener, $args) === false) break; // return false; // will break
      }
    }
    
    /**
     * Pass variable with all filters.
     *
     * @param $event
     * @param null $value
     * @return mixed|null
     */
    function filter($event, $value = null) {
      $args = func_get_args();
      $event = array_shift($args);
    
      foreach ((array)listeners($event) as $listener) {
        $args[0] = $value;
        $value = call_user_func_array($listener, $args);
      }
    
      return $value;
    }
    
    // ---------------------------------------------------- aliases ---------------------------------------------------- //
    
    /**
     * Trigger an action.
     *
     * @param $event
     * @return mixed
     */
    function action($event) {
      return call_user_func_array('\trigger', func_get_args());
    }
    
    /**
     * @param $event
     * @param callable $listener
     * @param int $priority
     */
    function add_action($event, callable $listener, $priority = 10) {
      on($event, $listener, $priority);
    }
    
    /**
     * @param $event
     * @param callable $listener
     * @param int $priority
     */
    function add_filter($event, callable $listener, $priority = 10) {
      on($event, $listener, $priority);
    }

 Download here: https://gist.github.com/OzzyCzech/fa03b06b8dd12b0bc570 #php #events