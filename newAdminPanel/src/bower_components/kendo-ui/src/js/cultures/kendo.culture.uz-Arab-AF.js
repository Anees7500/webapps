/** 
 * Copyright 2019 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.                                                                                      
 *                                                                                                                                                                                                      
 * Licensed under the Apache License, Version 2.0 (the "License");                                                                                                                                      
 * you may not use this file except in compliance with the License.                                                                                                                                     
 * You may obtain a copy of the License at                                                                                                                                                              
 *                                                                                                                                                                                                      
 *     http://www.apache.org/licenses/LICENSE-2.0                                                                                                                                                       
 *                                                                                                                                                                                                      
 * Unless required by applicable law or agreed to in writing, software                                                                                                                                  
 * distributed under the License is distributed on an "AS IS" BASIS,                                                                                                                                    
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                                                                                                             
 * See the License for the specific language governing permissions and                                                                                                                                  
 * limitations under the License.                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       

*/

(function(f){
    if (typeof define === 'function' && define.amd) {
        define(["kendo.core"], f);
    } else {
        f();
    }
}(function(){
(function( window, undefined ) {
    kendo.cultures["uz-Arab-AF"] = {
        name: "uz-Arab-AF",
        numberFormat: {
            pattern: ["-n"],
            decimals: 2,
            ",": ".",
            ".": ",",
            groupSize: [3],
            percent: {
                pattern: ["-n%","n%"],
                decimals: 2,
                ",": ".",
                ".": ",",
                groupSize: [3],
                symbol: "%"
            },
            currency: {
                name: "Afghan Afghani",
                abbr: "AFN",
                pattern: ["-n $","n $"],
                decimals: 0,
                ",": ".",
                ".": ",",
                groupSize: [3],
                symbol: "؋"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],
                    namesAbbr: ["ی.","د.","س.","چ.","پ.","ج.","ش."],
                    namesShort: ["ی.","د.","س.","چ.","پ.","ج.","ش."]
                },
                months: {
                    names: ["حمل","ثور","جوزا","سرطان","اسد","سنبله","میزان","عقرب","قوس","جدی","دلو","حوت"],
                    namesAbbr: ["حمل","ثور","جوزا","سرطان","اسد","سنبله","میزان","عقرب","قوس","جدی","دلو","حوت"]
                },
                AM: ["AM","am","AM"],
                PM: ["PM","pm","PM"],
                patterns: {
                    d: "dd/MM yyyy",
                    D: "dddd d MMMM yyyy",
                    F: "dddd d MMMM yyyy H:mm:ss",
                    g: "dd/MM yyyy H:mm",
                    G: "dd/MM yyyy H:mm:ss",
                    m: "d-MMMM",
                    M: "d-MMMM",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "H:mm",
                    T: "H:mm:ss",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "MMMM yyyy",
                    Y: "MMMM yyyy"
                },
                "/": "/",
                ":": ":",
                firstDay: 6
            }
        }
    }
})(this);
}));