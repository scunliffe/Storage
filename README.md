# Storage
A tiny wrapper for the JavaScript localStorage API for storing non-string values

#Why?
- In order to play nicely with other apps, you need a namespace
- Developers want an easy way to store numbers, booleans, dates, maps, arrays & custom objects without having to use an async API
- When using a persistance layer, being able to cache values that were set, or retrieved values at a later time is highly desired

#What methods does it support?

    void Storage.clear()
    /*
      Deletes all values for the current namespace from localStorage
    */

    void Storage.flushCache()
    /*
      Clears the in-memory cache for the current namespace
    */

    variant Storage.getItem(key)
    /*
      Returns the value stored for this key or null if not defined
      Value is retrieved from the cache (if present)
    */
		
    void Storage.removeItem(key)
    /*
      Deletes the key for the current namespace from localStorage
    */
		
    void Storage.setItem(key, value)
    /*
      Sets the key to the value specified for the current namespace in localStorage
    */
		
    void Storage.setNamespace(nameSpace)
    /*
    	Defines the namespace prefix to use on all stored keys.
    */
		
		
		
		
		
