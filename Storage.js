/*
	Provide a wrapper to localStorage to store data with the following enhancements:
		* Stored values can be any datatype, not just strings
		* A local cache is maintained in memory to avoid de-serializing non-dirty values
*/
'use strict';
var Storage = Storage || {};
(function(){
	Storage._ns = ':';
	Storage._cache = {};
	Storage.clear = function(){
		var key;
		var ns = this._ns;
		var nsLen = ns.length;
		for(var i=localStorage.length-1;i>-1;i--){
			key = localStorage.key(i);
			if(key.substr(0, nsLen) == ns){
				localStorage.removeItem(key);
			}
		}
		this.flushCache();
	};
	Storage.flushCache = function(){
		this._cache = {};
	};
	Storage.getItem = function(key){
		if(key in this._cache){
			return this._cache[key];
		}
		var val = null;
		var valJSON = localStorage.getItem(this._ns + key);
		if(valJSON){
			val = JSON.parse(valJSON)["_"];
		}
		this._cache[key] = val;//cache it
		return val;
	};
	Storage.removeItem = function(key){
		if(key in this._cache){
			delete this._cache[key];
		}
		localStorage.removeItem(this._ns + key);
	};
	Storage.setItem = function(key, val){
		this._cache[key] = val;//set/reset cache
		localStorage.setItem(this._ns + key, JSON.stringify({"_": val}));
	};
	Storage.setNamespace = function(ns){
		this._ns = ns + ':';
		this.flushCache();//force a cache clear
	};
})();
