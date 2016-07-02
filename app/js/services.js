

angular
.module('IPGui.services', [])
.factory('metadata', ['$q', function($q) {
	var metadata = {}
	function setFile(file) {
		metadata.file = file;
		console.log(metadata.file.name);
	}
	function getFile() {
		if('file' in metadata){
			return metadata.file.name;
		}else{
			return "File not selected";
		}
	}

	function load()
	{
		var obj =
		{
  "ip": {
    "$": {
      "name": "adder",
      "version": "0.0.0",
      "arch": "all"
    },
    "config_macro": [
      {
        "macro": [
          {
            "$": {
              "name": "has_carry",
              "type": "bool",
              "default": "no"
            }
          },
          {
            "$": {
              "name": "output_mode",
              "type": "enum",
              "values": "unregistered registered",
              "default": "unregistered"
            }
          }
        ]
      }
    ],
    "view": [
      {
        "$": {
          "name": "out_noreg_without_carry",
          "config_string": "{has_carry=no,output_mode=unregistered}"
        },
        "group": [
          {
            "$": {
              "name": "Setting section 1"
            },
            "description": [
              "This is a description for this group of configurations."
            ],
            "setting": [
              {
                "$": {
                  "id": "m1",
                  "name": "module name",
                  "type": "param",
                  "display": "input",
                  "drc": "rule1",
                  "default": "default input"
                }
              },
              {
                "$": {
                  "id": "m2",
                  "name": "mode",
                  "type": "macro",
                  "display": "radius",
                  "values": "read write"
                }
              },
              {
                "$": {
                  "id": "m3",
                  "name": "frequency",
                  "type": "param",
                  "display": "dropbox",
                  "values": "option1 option2 option3"
                }
              },
              {
                "$": {
                  "id": "m4",
                  "name": "devided by",
                  "type": "macro",
                  "display": "input",
                  "drc": "rule2",
                  "default": "5"
                }
              },
              {
                "$": {
                  "id": "m5",
                  "name": "registered",
                  "type": "macro",
                  "display": "checkbox",
                  "default": "yes"
                }
              }
            ]
          }
        ],
        "port": [
          {
            "$": {
              "name": "p1",
              "dir": "in",
              "range_low": "0",
              "range_high": "1",
              "conn_mod": "core",
              "conn_port": "core_p1"
            }
          },
          {
            "$": {
              "name": "p2",
              "dir": "in",
              "range_low": "0",
              "range_high": "m4",
              "conn_mod": "core",
              "conn_port": "core_p2"
            }
          },
          {
            "$": {
              "name": "p5",
              "dir": "out",
              "range_low": "m1",
              "range_high": "10",
              "conn_mod": "core",
              "conn_port": "core_p5"
            }
          },
          {
            "$": {
              "name": "p6",
              "dir": "out",
              "range_low": "0",
              "range_high": "m4",
              "conn_mod": "core",
              "conn_port": "core_p6"
            }
          }
        ]
      },
      {
        "$": {
          "name": "out_reg_with_carry",
          "config_string": "{has_carry=yes,output_mode=registered}"
        },
        "group": [
          {
            "$": {
              "name": "Setting section 1"
            },
            "setting": [
              {
                "$": {
                  "id": "m1",
                  "name": "module name",
                  "type": "param",
                  "display": "input",
                  "drc": "rule1",
                  "default": "default input"
                }
              },
              {
                "$": {
                  "id": "m2",
                  "name": "mode",
                  "type": "macro",
                  "display": "radius",
                  "values": "read write"
                }
              },
              {
                "$": {
                  "id": "m3",
                  "name": "frequency",
                  "type": "param",
                  "display": "dropbox",
                  "values": "aaa bbb ccc"
                }
              },
              {
                "$": {
                  "id": "m4",
                  "name": "coeffecient",
                  "type": "macro",
                  "display": "input",
                  "drc": "rule2",
                  "default": "5"
                }
              },
              {
                "$": {
                  "id": "m5",
                  "name": "up",
                  "type": "macro",
                  "display": "checkbox",
                  "default": "yes"
                }
              }
            ]
          },
          {
            "$": {
              "name": "Setting section 2"
            },
            "setting": [
              {
                "$": {
                  "id": "m6",
                  "name": "output name",
                  "type": "param",
                  "display": "input",
                  "drc": "rule1",
                  "default": "1"
                }
              },
              {
                "$": {
                  "id": "m7",
                  "name": "coefficient",
                  "type": "macro",
                  "display": "radius",
                  "values": "1 20 30 40 1024"
                }
              },
              {
                "$": {
                  "id": "m8",
                  "name": "has another group",
                  "type": "macro",
                  "display": "checkbox",
                  "default": true
                }
              }
            ]
          },
          {
            "$": {
              "name": "Setting section 3",
              "show": "m8"
            },
            "setting": [
              {
                "$": {
                  "id": "m9",
                  "name": "another input",
                  "type": "param",
                  "display": "input",
                  "drc": "rule1",
                  "default": "1"
                }
              },
              {
                "$": {
                  "id": "m10",
                  "name": "select name",
                  "type": "macro",
                  "display": "radius",
                  "values": "Henry Jenney Emma"
                }
              },
              {
                "$": {
                  "id": "m11",
                  "name": "good or bad",
                  "type": "macro",
                  "display": "checkbox",
                  "default": "false"
                }
              }
            ]
          }
        ],
        "port": [
          {
            "$": {
              "name": "p1",
              "dir": "in",
              "range_low": "0",
              "range_high": "1",
              "conn_mod": "core",
              "conn_port": "core_p1"
            }
          },
          {
            "$": {
              "name": "p2",
              "dir": "in",
              "range_low": "0",
              "range_high": "m4",
              "conn_mod": "core",
              "conn_port": "core_p2"
            }
          },
          {
            "$": {
              "name": "clk",
              "dir": "in",
              "conn_mod": "core",
              "conn_port": "core_clk"
            }
          },
          {
            "$": {
              "name": "cout",
              "dir": "out",
              "conn_mod": "core",
              "conn_port": "core_cout"
            }
          },
          {
            "$": {
              "name": "p5",
              "dir": "out",
              "range_low": "m1",
              "range_high": "10",
              "conn_mod": "core",
              "conn_port": "core_p5"
            }
          },
          {
            "$": {
              "name": "p6",
              "dir": "out",
              "range_low": "0",
              "range_high": "m4",
              "conn_mod": "core",
              "conn_port": "core_p6"
            }
          }
        ]
      }
    ],
    "drc": [
      {
        "range": [
          {
            "$": {
              "name": "rule1",
              "low": "1",
              "up": "10"
            }
          }
        ],
        "enum": [
          {
            "$": {
              "name": "rule2",
              "values": "4 5 6"
            }
          }
        ]
      }
    ]
  }
};


	return obj;

	}


	return {
		setFile: setFile,
		getFile: getFile,
		load:   load
	}

}]);

		/*		var d = $q.defer();
		// load xml file and convert to JSON format
		var reader = new FileReader();
		reader.onload = function(e){
		d.resolve(e.target.result);
		}
		reader.onerror = function(e){
		d.reject(e.target.result);
		}
		console.log(metadata.file);
		reader.readAsText(metadata.file);
		return d.promise;*/

  //	$scope.ipdata = "";
  //	
  //	metadata.load().then(
  //		function (a){
  //			var convertor = new xml2js();
  //			convertor.parseString(a,
  //				function(err, result){
  //					if(err){
  //						console.log(err);
  //					}else{
  //						$scope.ipdata = JSON.stringify(result, 2, 0);
  //					}
  //				}
  //			)},
  //		function (b){
  //			$scope.ipdata = b;
  //			})
