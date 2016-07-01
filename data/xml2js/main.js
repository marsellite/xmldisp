var xml2js = require("xml2js");
var fs = require("fs");

var parser = new xml2js.Parser();

fs.readFile(__dirname + '/adder.xml', function(err, data) {
    parser.parseString(data, function (err, result) {    
        console.log( JSON.stringify(result, null, 2));                                                       
    });                                                  
}); 
/*
fs.readFile(__dirname + '/adder.json', function(err, data) {
    //var result = JSON.parse(data)              ;
        
    var result = 
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
            "setting": [
              {
                "$": {
                  "name": "m1",
                  "type": "param",
                  "display": "input",
                  "drc": "rule1",
                  "default": "1"
                }
              },
              {
                "$": {
                  "name": "m2",
                  "type": "macro",
                  "display": "radius",
                  "values": "read write",
                  "default": "read"
                }
              },
              {
                "$": {
                  "name": "m3",
                  "type": "param",
                  "display": "dropbox",
                  "values": "aaa bbb ccc",
                  "default": "aaa"
                }
              },
              {
                "$": {
                  "name": "m4",
                  "type": "macro",
                  "display": "input",
                  "drc": "rule2",
                  "default": "5"
                }
              },
              {
                "$": {
                  "name": "m5",
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
                  "name": "m1",
                  "type": "param",
                  "display": "input",
                  "drc": "rule1",
                  "default": "1"
                }
              },
              {
                "$": {
                  "name": "m2",
                  "type": "macro",
                  "display": "radius",
                  "values": "read write",
                  "default": "read"
                }
              },
              {
                "$": {
                  "name": "m3",
                  "type": "param",
                  "display": "dropbox",
                  "values": "aaa bbb ccc",
                  "default": "aaa"
                }
              },
              {
                "$": {
                  "name": "m4",
                  "type": "macro",
                  "display": "input",
                  "drc": "rule2",
                  "default": "5"
                }
              },
              {
                "$": {
                  "name": "m5",
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
                  "name": "m6",
                  "type": "param",
                  "display": "input",
                  "drc": "rule1",
                  "default": "1"
                }
              },
              {
                "$": {
                  "name": "m7",
                  "type": "macro",
                  "display": "radius",
                  "values": "read write",
                  "default": "read"
                }
              },
              {
                "$": {
                  "name": "m8",
                  "type": "macro",
                  "display": "checkbox",
                  "default": "yes"
                }
              }
            ]
          },
          {
            "$": {
              "name": "Setting section 3",
              "show": "m8=yes"
            },
            "setting": [
              {
                "$": {
                  "name": "m9",
                  "type": "param",
                  "display": "input",
                  "drc": "rule1",
                  "default": "1"
                }
              },
              {
                "$": {
                  "name": "m10",
                  "type": "macro",
                  "display": "radius",
                  "values": "read write",
                  "default": "read"
                }
              },
              {
                "$": {
                  "name": "m11",
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

console.dir(result);
});           
        */                                   