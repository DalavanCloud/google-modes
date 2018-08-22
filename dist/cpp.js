(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

  var e = [/^static_assert(?![a-zA-Z¡-￿_0-9])/, /^namespace(?![a-zA-Z¡-￿_0-9])/, /^throw(?![a-zA-Z¡-￿_0-9])/, /^try(?![a-zA-Z¡-￿_0-9])/, /^asm(?![a-zA-Z¡-￿_0-9])/, /^enum(?![a-zA-Z¡-￿_0-9])/, /^for(?![a-zA-Z¡-￿_0-9])/, /^while(?![a-zA-Z¡-￿_0-9])/, /^do(?![a-zA-Z¡-￿_0-9])/, /^if(?![a-zA-Z¡-￿_0-9])/, /^switch(?![a-zA-Z¡-￿_0-9])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9])/, /^goto(?![a-zA-Z¡-￿_0-9])/, /^return(?![a-zA-Z¡-￿_0-9])/, /^(?:struct|union)(?![a-zA-Z¡-￿_0-9])/, /^default(?![a-zA-Z¡-￿_0-9])/, /^case(?![a-zA-Z¡-￿_0-9])/, /^(?:_[A-Z0-9_]+(?![a-zA-Z¡-￿_0-9])|[A-Z]+[A-Z0-9]*_[A-Z0-9_]*(?![a-zA-Z¡-￿_0-9]))/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?=\{)/, /^typename(?![a-zA-Z¡-￿_0-9])/, /^alignas(?![a-zA-Z¡-￿_0-9])/, /^(?:0x[0-9a-fA-F\']+|0b[01\']+|(?:[0-9][0-9\']*(?:\.[0-9\']*)?|\.[0-9][0-9\']*)(?:[eE]\-?[0-9\']*)?)[LlUuFf]?/, /^class(?![a-zA-Z¡-￿_0-9])/, /^(?:final|explicit)(?![a-zA-Z¡-￿_0-9])/, /^using(?![a-zA-Z¡-￿_0-9])/, /^export(?![a-zA-Z¡-￿_0-9])/, /^template(?![a-zA-Z¡-￿_0-9])/, /^auto(?![a-zA-Z¡-￿_0-9])/, /^(?:inline|virtual|explicit|friend|constexpr|mutable|thread_local)(?![a-zA-Z¡-￿_0-9])/, /^(?:register|static|extern|typedef)(?![a-zA-Z¡-￿_0-9])/, /^(?:const|volatile)(?![a-zA-Z¡-￿_0-9])/, /^(?:unsigned|signed|long)(?![a-zA-Z¡-￿_0-9])/, /^(?:int|float|double|char|short)(?![a-zA-Z¡-￿_0-9])/, /^operator(?![a-zA-Z¡-￿_0-9])/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, /^new(?![a-zA-Z¡-￿_0-9])/, /^delete(?![a-zA-Z¡-￿_0-9])/, /^\~?[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^catch(?![a-zA-Z¡-￿_0-9])/, /^noexcept(?![a-zA-Z¡-￿_0-9])/, /^(?:override|final|new)(?![a-zA-Z¡-￿_0-9])/, /^else(?![a-zA-Z¡-￿_0-9])/, /^(?:\+\+|\-\-)/, /^(?:\-\>|(?!\.\.)\.)/, [1, "\n", "\t", " "], /^[a-zA-Z0-9¡-￿_\.]+/, /^\@[a-zA-Z0-9¡-￿_]+/, [0, /^(?!\*\/|\{?\@[a-zA-Z0-9¡-￿_])/, /^[^]/], /^(?:\.\.\.)?/, /^virtual(?![a-zA-Z¡-￿_0-9])/, /^(?:private|public|protected)(?![a-zA-Z¡-￿_0-9])/, /^this(?![a-zA-Z¡-￿_0-9])/, /^(?:dynamic|static|const|reinterpret)_cast(?![a-zA-Z¡-￿_0-9])/, /^(?:nullptr(?![a-zA-Z¡-￿_0-9])|(?:true|false|null)(?![a-zA-Z¡-￿_0-9]))/, /^(?:sizeof|alignof)(?![a-zA-Z¡-￿_0-9])/, /^(?:\(\)|\[\])/, /^(?:\[\])?/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\()/, /^(?!\>)/, /^(?:\.\.\.|\(|\=|\>|\,)/, /^(?:\*|\&\&|\&)/];
  var nodes = [
    [2, 6, 2, {"name":"preprocessorLine","token":"meta"},
     0, 2],
    [/^[^]/, 0],
    [1, 9, 3],
    [2, 12, 4, {"name":"Statement"}],
    [0, 2,
     0, 1],
    [3, "keyword", e[5], -1,
     3, "keyword", e[13], -1,
     3, "keyword", e[9], -1,
     3, "keyword", e[42], -1,
     3, "keyword", e[6], -1,
     3, "keyword", e[7], -1,
     3, "keyword", e[8], -1,
     3, "keyword", e[11], -1,
     3, "keyword", e[12], -1,
     3, "keyword", e[15], -1,
     3, "keyword", e[16], -1,
     3, "keyword", e[10], -1,
     3, "keyword", e[14], -1,
     3, "keyword", e[55], -1,
     3, "keyword", e[28], -1,
     3, "keyword", e[29], -1,
     3, "keyword", e[30], -1,
     3, "type", e[32], -1,
     3, "type", e[33], -1,
     3, "keyword", e[31], -1,
     3, "atom", e[54], -1,
     3, "meta", e[17], -1,
     1, 127, -1,
     3, "number", e[22], -1,
     2, 134, -1, {"name":"string","token":"string"},
     2, 139, -1, {"name":"prefixOp","token":"operator"},
     3, "operator", e[43], -1,
     3, "operator", e[35], -1,
     2, 140, -1, {"name":"comment","token":"comment"},
     3, "keyword", e[1], -1,
     3, "keyword", e[20], -1,
     3, "keyword", e[36], -1,
     3, "keyword", e[37], -1,
     3, "keyword", e[52], -1,
     3, "keyword", e[3], -1,
     3, "keyword", e[39], -1,
     3, "keyword", e[2], -1,
     3, "keyword", e[40], -1,
     3, "keyword", e[4], -1,
     3, "keyword", e[26], -1,
     3, "keyword", e[27], -1,
     3, "keyword", e[23], -1,
     3, "keyword", e[50], -1,
     3, "keyword", e[51], -1,
     3, "keyword", e[34], -1,
     3, "keyword", e[25], -1,
     3, "keyword", e[21], -1,
     3, "keyword", e[0], -1,
     3, "keyword", e[53], -1,
     3, "keyword", e[41], -1,
     3, "keyword", e[24], -1,
     /^[^]/, -1],
    ["#", 7],
    [2, 140, 7, {"name":"comment","token":"comment"},
     "\\", 8,
     /^./, 7,
     0, -1],
    [/^[^]/, 7],
    [/^[ \t]/, 9,
     "\n", 10,
     2, 140, 9, {"name":"comment","token":"comment"},
     0, -1],
    [/^[ \t]*/, 11],
    [2, 6, 9, {"name":"preprocessorLine","token":"meta"},
     0, 9],
    [1, 145, -1,
     1, 162, -1,
     3, "keyword", e[0], 13,
     3, "keyword", e[1], 17,
     3, "keyword", e[2], 25,
     3, "keyword", e[3], 29,
     3, "keyword", e[4], 33,
     1, 177, -1,
     2, 190, -1, {"name":"Template"},
     [7, "constructorAhead"], 39,
     3, "keyword", e[5], 42,
     3, "keyword", e[6], 46,
     3, "keyword", e[7], 47,
     3, "keyword", e[8], 48,
     3, "keyword", e[9], 72,
     3, "keyword", e[10], 77,
     2, 199, -1, {"name":"Block"},
     3, "keyword", e[11], 81,
     3, "keyword", e[12], 83,
     3, "keyword", e[13], 87,
     3, "keyword", e[14], 91,
     3, "keyword", e[15], 97,
     3, "keyword", e[16], 98,
     [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 203]], 97,
     3, "meta", e[17], 101,
     2, 204, 109, {"name":"DeclType"},
     ";", -1,
     1, 221, 125],
    [1, 9, 14],
    [2, 226, 15, {"name":"ArgList"}],
    [1, 9, 16],
    [";", -1],
    [1, 9, 18],
    [1, 231, 19,
     0, 19],
    [1, 9, 20],
    [3, "operator", "=", 21,
     2, 236, -1, {"name":"NamespaceBlock"}],
    [1, 9, 22],
    [1, 127, 23],
    [1, 9, 24],
    [";", -1],
    [1, 9, 26],
    [1, 221, 27],
    [1, 9, 28],
    [";", -1],
    [1, 9, 30],
    [2, 199, 31, {"name":"Block"}],
    [1, 9, 32],
    [2, 240, -1, {"name":"Catch"}],
    [1, 9, 34],
    ["{", 35],
    [1, 9, 36],
    [2, 134, 37, {"name":"string","token":"string"}],
    [1, 9, 38],
    ["}", -1],
    [1, 231, 40],
    [1, 9, 41],
    [2, 252, -1, {"name":"FunctionDef"}],
    [1, 9, 43],
    [3, "type def", e[18], 44,
     0, 44],
    [1, 9, 45],
    [2, 285, -1, {"name":"BlockOf"},
     0, -1],
    [1, 9, 49],
    [1, 9, 50],
    [1, 9, 51],
    ["(", 52],
    [2, 303, 53, {"name":"CondExpr"}],
    [2, 12, 54, {"name":"Statement"}],
    [1, 9, 55],
    [1, 9, 56],
    [1, 9, 57],
    [2, 12, 58, {"name":"Statement"}],
    [2, 12, -1, {"name":"Statement"}],
    [3, "keyword", e[7], 59],
    [1, 9, 60],
    [1, 9, 61],
    [1, 221, 62,
     0, 62],
    [2, 303, 63, {"name":"CondExpr"}],
    [1, 9, 64],
    [1, 9, 65],
    [";", 66],
    [";", -1],
    [1, 9, 67],
    [1, 221, 68,
     0, 68],
    [1, 9, 69],
    [")", 70],
    [1, 9, 71],
    [2, 12, -1, {"name":"Statement"}],
    [1, 9, 73],
    [2, 303, 74, {"name":"CondExpr"}],
    [1, 9, 75],
    [2, 12, 76, {"name":"Statement"}],
    [2, 308, -1, {"name":"Alternative"}],
    [1, 9, 78],
    [2, 303, 79, {"name":"CondExpr"}],
    [1, 9, 80],
    [2, 199, -1, {"name":"Block"}],
    [1, 9, 82],
    [";", -1],
    [1, 9, 84],
    [e[18], 85],
    [1, 9, 86],
    [";", -1],
    [1, 9, 88],
    [1, 221, 89,
     0, 89],
    [1, 9, 90],
    [";", -1],
    [1, 9, 92],
    [1, 231, 93,
     0, 93],
    [1, 9, 94],
    [2, 312, 95, {"name":"BlockOf"},
     0, 95],
    [1, 9, 96],
    [";", -1],
    [1, 9, 99],
    [1, 9, 100],
    [":", -1],
    [1, 221, 97],
    [1, 9, 102],
    [2, 322, 103, {"name":"ParenTokens"},
     0, 103],
    [1, 9, 104],
    [2, 199, 105, {"name":"Block"},
     0, 106,
     0, 105],
    [1, 9, 107],
    [1, 326, 108,
     0, 105],
    [/^\;?/, -1],
    [1, 9, 106],
    [1, 9, 110],
    [1, 347, 111],
    [1, 9, 112],
    [3, "meta", e[17], 113,
     [5, 359], 114,
     1, 363, 115,
     0, 115],
    [1, 9, 116],
    [2, 252, -1, {"name":"FunctionDef"}],
    [1, 9, 117],
    [2, 322, 118, {"name":"ParenTokens"},
     0, 118],
    [",", 119,
     ";", -1],
    [1, 9, 120],
    [1, 9, 121],
    [/^\;?/, -1],
    [1, 231, 122],
    [1, 9, 123],
    [1, 363, 124,
     0, 124],
    [1, 9, 117],
    [1, 9, 126],
    [";", -1],
    [0, 128,
     3, "type", e[19], -1,
     2, 366, 133, {"name":"unqualifiedVariableName","token":"variable"}],
    [1, 367, 129],
    [0, 128,
     3, "type qualified", e[19], 130,
     2, 372, 130, {"name":"qualifiedVariableName","token":"qualified"}],
    [2, 373, 131, {"name":"TemplateArgs"},
     0, -1],
    [/^(?=\:\:)/, 132,
     0, -1],
    [1, 127, -1],
    [2, 373, -1, {"name":"TemplateArgs"},
     0, -1],
    [/^R\"(?:(?!\().)*\(/, 135,
     /^(?:(?:L|u8?|U)(?=[\'\"]))?/, 136],
    [[0, [7, "rawStringContinues"], /^[^]/], 135,
     "\"", -1],
    [/^\'(?:\\.(?:(?!\').)*|.)\'/, -1,
     "\"", 137],
    ["\\", 138,
     [0, /^(?!\")/, /^[^]/], 137,
     "\"", -1],
    [/^[^]/, 137],
    [3, "keyword", e[20], -1,
     /^(?:\+\+|\-\-|\!|\~|\&|\*|\+)/, -1],
    [/^\/\*\*(?!\/)/, 141,
     "/*", 144,
     /^\/\/.*/, -1],
    [e[48], 142,
     0, 143],
    [0, 141,
     0, 141],
    [2, 378, 143, {"name":"doccomment.tagGroup"},
     "*/", -1],
    [[0, /^(?!\*\/)/, /^[^]/], 144,
     "*/", -1],
    [3, "keyword", e[21], 147,
     [0, [5, 389], "["], 148],
    [0, 145,
     0, -1],
    [1, 9, 149],
    [1, 9, 150],
    ["(", 151],
    ["[", 152],
    [1, 9, 153],
    [1, 9, 154],
    [3, "number", e[22], 155],
    [1, 393, 156],
    [1, 9, 157],
    [1, 9, 158],
    [")", 159],
    ["]", 160],
    [1, 9, 146],
    [1, 9, 161],
    ["]", 159],
    [3, "keyword", e[23], 163,
     3, "keyword", e[14], 163],
    [1, 9, 164],
    [1, 145, 165,
     0, 165],
    [1, 9, 166],
    [0, 167,
     3, "type def", e[18], 170],
    [1, 415, 168],
    [1, 9, 169],
    [0, 167,
     3, "type qualified", e[18], 170],
    [1, 9, 171],
    [3, "keyword", e[24], 172,
     ":", 173,
     0, 175],
    [1, 9, 171],
    [1, 9, 174],
    [1, 420, 175],
    [1, 9, 176],
    [";", -1,
     2, 434, -1, {"name":"ClassBody"}],
    [3, "keyword", e[25], 178],
    [1, 9, 179],
    [3, "keyword", e[20], 180,
     3, "keyword", e[1], 181,
     0, 181],
    [1, 9, 182],
    [1, 9, 183],
    [1, 438, 184],
    [1, 127, 184],
    [1, 9, 185],
    [3, "operator", "=", 186,
     0, 188],
    [1, 9, 187],
    [1, 438, 188],
    [1, 9, 189],
    [";", -1],
    [3, "keyword", e[26], 191,
     0, 191],
    [1, 9, 192],
    [3, "keyword", e[27], 193],
    [1, 9, 194],
    [2, 451, 195, {"name":"TemplateParams"}],
    [1, 9, 196],
    [1, 9, 197],
    [1, 9, 198],
    [2, 12, -1, {"name":"Statement"}],
    ["{", 200],
    [1, 9, 201],
    [2, 12, 202, {"name":"Statement"},
     "}", -1],
    [1, 9, 201],
    [e[45], 203,
     /^\:(?!\:)/, -1],
    [0, 205,
     0, 206,
     3, "keyword", e[28], 217,
     [5, 456], 218],
    [3, "keyword", e[29], 207,
     3, "keyword", e[30], 207,
     3, "keyword", e[31], 207],
    [3, "type", e[32], 208],
    [1, 9, 209],
    [1, 9, 210],
    [0, 205,
     3, "keyword", e[28], 211,
     0, 212,
     1, 461, 211],
    [0, 206,
     3, "type", e[33], 211,
     0, 211],
    [1, 9, 213],
    [3, "type", e[32], 214],
    [1, 466, 215,
     0, -1],
    [0, 212,
     1, 9, 216,
     0, 211],
    [1, 9, 213],
    [3, "type", e[33], 211],
    [1, 9, 219],
    [1, 461, 217],
    [1, 466, 220,
     0, -1],
    [1, 9, 219],
    [1, 473, 222,
     1, 490, 223],
    [1, 9, 221],
    [1, 9, 224],
    [1, 326, 225,
     0, -1],
    [1, 9, 224],
    ["(", 227],
    [1, 9, 228],
    [1, 525, 229],
    [1, 9, 230],
    [")", -1],
    [3, "keyword", e[34], 232,
     0, 234,
     3, "def", e[38], -1],
    [3, "operator", "->*", -1,
     ",", -1,
     3, "operator", e[35], -1,
     2, 139, -1, {"name":"prefixOp","token":"operator"},
     e[56], -1,
     3, "keyword", e[36], 233,
     3, "keyword", e[37], 233],
    [e[57], -1],
    [1, 531, 235],
    [0, 234,
     3, "qualified def", e[38], -1],
    ["{", 237],
    [1, 9, 238],
    [2, 12, 239, {"name":"Statement"},
     "}", -1],
    [1, 9, 238],
    [3, "keyword", e[39], 241,
     0, -1],
    [1, 9, 242],
    ["(", 243],
    [1, 9, 244],
    [1, 438, 245],
    [1, 9, 246],
    [1, 347, 247,
     0, 247],
    [1, 9, 248],
    [")", 249],
    [1, 9, 250],
    [2, 199, 251, {"name":"Block"}],
    [1, 9, 240],
    [2, 536, 253, {"name":"ParamList"}],
    [1, 9, 254],
    [3, "keyword", e[31], 255,
     /^(?:\&|\&\&)?/, 256],
    [1, 9, 254],
    [1, 9, 257],
    [3, "keyword", e[40], 258,
     3, "keyword", e[2], 259,
     0, 270],
    [1, 9, 260],
    [1, 9, 261],
    ["(", 262,
     0, 270],
    ["(", 263],
    [1, 9, 264],
    [1, 9, 265],
    [1, 221, 266],
    [1, 541, 267],
    [1, 9, 268],
    [1, 9, 269],
    [")", 270],
    [")", 270],
    [1, 9, 271],
    [1, 145, 272,
     0, 272],
    [1, 9, 273],
    ["->", 274,
     0, 276],
    [1, 9, 275],
    [1, 438, 276],
    [1, 9, 277],
    [3, "keyword", e[41], 278,
     2, 547, 279, {"name":"InitializerList"},
     0, 279],
    [1, 9, 277],
    [1, 9, 280],
    [";", -1,
     2, 199, -1, {"name":"Block"},
     3, "operator", "=", 281],
    [1, 9, 282],
    [3, "keyword", e[15], 283,
     3, "keyword", e[37], 283],
    [1, 9, 284],
    [";", -1],
    ["{", 286],
    [1, 9, 287],
    [1, 550, 288,
     0, 301],
    [1, 9, 289],
    [3, "operator", "=", 290,
     0, 291],
    [1, 9, 292],
    [1, 9, 293],
    [1, 221, 291],
    [",", 294,
     0, 301],
    [1, 9, 295],
    [1, 550, 296,
     0, 297],
    [1, 9, 298],
    [1, 9, 293],
    [3, "operator", "=", 299,
     0, 297],
    [1, 9, 300],
    [1, 221, 297],
    [1, 9, 302],
    ["}", -1],
    ["(", 304],
    [1, 9, 305],
    [1, 221, 306,
     0, 306],
    [1, 9, 307],
    [")", -1],
    [1, 9, 309],
    [3, "keyword", e[42], 310,
     0, -1],
    [1, 9, 311],
    [2, 12, -1, {"name":"Statement"}],
    ["{", 313],
    [1, 9, 314],
    [1, 553, 315,
     0, 320],
    [1, 9, 316],
    [";", 317,
     0, 320],
    [1, 9, 318],
    [1, 553, 319,
     0, 319],
    [1, 9, 316],
    [1, 9, 321],
    ["}", -1],
    ["(", 323],
    [1, 9, 324],
    [1, 564, 325,
     ")", -1],
    [1, 9, 324],
    [2, 569, -1, {"name":"BlockOf"},
     2, 226, 327, {"name":"ArgList"},
     e[44], 329,
     2, 226, -1, {"name":"ArgList"},
     "[", 333,
     3, "operator", e[43], -1,
     e[44], 337,
     3, "operator", e[35], 339,
     "?", 341],
    [1, 9, 328],
    [2, 199, -1, {"name":"Block"},
     0, -1],
    [1, 9, 330],
    [2, 579, 331, {"name":"fieldName","token":"property"}],
    [1, 9, 332],
    [2, 373, -1, {"name":"TemplateArgs"},
     0, -1],
    [1, 9, 334],
    [1, 221, 335],
    [1, 9, 336],
    ["]", -1],
    [1, 9, 338],
    [2, 579, -1, {"name":"fieldName","token":"property"}],
    [1, 9, 340],
    [1, 221, -1,
     0, -1],
    [1, 9, 342],
    [1, 221, 343],
    [1, 9, 344],
    [":", 345],
    [1, 9, 346],
    [1, 221, -1],
    [0, 348,
     "(", 355],
    [e[61], 349,
     1, 231, 350],
    [1, 9, 348],
    [1, 9, 351],
    ["[", 352,
     0, -1],
    [1, 9, 353],
    ["]", 354],
    [1, 9, 351],
    [1, 9, 356],
    [1, 347, 357],
    [1, 9, 358],
    [")", -1],
    ["(", 360],
    [1, 9, 361],
    [")", -1,
     3, "keyword", e[29], -1,
     3, "keyword", e[30], -1,
     3, "keyword", e[31], -1,
     3, "type", e[32], -1,
     3, "keyword", e[28], -1,
     [5, 456], 362],
    [1, 461, -1],
    [3, "operator", "=", 364,
     2, 569, -1, {"name":"BlockOf"},
     2, 226, -1, {"name":"ArgList"}],
    [1, 9, 365],
    [1, 221, -1],
    [3, "callee", e[58], -1,
     e[18], -1],
    ["::", -1,
     [5, 580], 368],
    [3, "variable qualifier", e[18], 369],
    [2, 373, 370, {"name":"TemplateArgs"},
     0, 370],
    [1, 9, 371],
    ["::", -1],
    [2, 366, -1, {"name":"unqualifiedVariableName","token":"variable"}],
    ["<", 374],
    [1, 9, 375],
    [1, 584, 376],
    [1, 9, 377],
    [">", -1],
    [3, "tag", /^\@param(?![a-zA-Z0-9¡-￿_])/, 379,
     3, "tag", /^\@(?:throws|exception)(?![a-zA-Z0-9¡-￿_])/, 380,
     3, "tag", e[47], 387,
     "{", 381],
    [e[45], 379,
     3, "def", e[46], 387,
     "<", 382,
     0, 387],
    [e[45], 380,
     3, "type", e[46], 387,
     0, 387],
    [3, "tag", e[47], 383],
    [3, "type def", /^[a-zA-Z0-9¡-￿_]+/, 384],
    [/^[\t ]*/, 385],
    [">", 387],
    [1, 616, 386],
    ["}", 387],
    [e[48], 388,
     0, -1],
    [0, 387,
     0, 387],
    ["[", 390],
    [1, 9, 391],
    [" ", 392,
     "[", -1],
    [1, 9, 391],
    [1, 620, 394,
     3, "meta", e[18], 395,
     0, -1],
    [1, 9, 393],
    [1, 9, 396],
    ["(", 397,
     0, 398],
    [1, 9, 399],
    [1, 9, 400],
    [1, 625, 401,
     ")", 398],
    [e[49], 402],
    [1, 9, 399],
    [1, 9, 403],
    [",", 404,
     0, -1],
    [1, 9, 405],
    [1, 620, 406,
     3, "meta", e[18], 407],
    [1, 9, 405],
    [1, 9, 408],
    ["(", 409,
     0, 410],
    [1, 9, 411],
    [1, 9, 412],
    [1, 625, 413,
     ")", 410],
    [e[49], 414],
    [1, 9, 411],
    [1, 9, 403],
    ["::", -1,
     [5, 635], 416],
    [3, "type qualifier", e[18], 417],
    [2, 373, 418, {"name":"TemplateArgs"},
     0, 418],
    [1, 9, 419],
    ["::", -1],
    [3, "keyword", e[50], 421,
     0, 421,
     0, -1],
    [1, 9, 422],
    [3, "keyword", e[51], 423,
     0, 423],
    [1, 9, 424],
    [1, 438, 425],
    [1, 9, 426],
    [",", 427,
     0, -1],
    [1, 9, 428],
    [3, "keyword", e[50], 429,
     0, 429],
    [1, 9, 430],
    [3, "keyword", e[51], 431,
     0, 431],
    [1, 9, 432],
    [1, 438, 433],
    [1, 9, 426],
    ["{", 435],
    [1, 9, 436],
    [2, 639, 437, {"name":"ClassItem"},
     "}", -1],
    [1, 9, 436],
    [3, "keyword", e[20], 439,
     0, 441],
    [1, 9, 440],
    [1, 438, -1],
    [3, "keyword", e[29], 442,
     3, "keyword", e[30], 442,
     3, "keyword", e[31], 442,
     3, "keyword", e[14], 443,
     0, 443],
    [1, 9, 441],
    [1, 9, 444],
    [3, "keyword", e[28], 445,
     0, 446,
     1, 461, 445],
    [1, 9, 447],
    [3, "type", e[32], 448],
    [1, 466, 449,
     0, -1],
    [0, 446,
     1, 9, 450,
     0, 445],
    [1, 9, 447],
    [3, "type", e[33], 445],
    ["<", 452],
    [1, 9, 453],
    [1, 650, 454],
    [1, 9, 455],
    [">", -1],
    [/^(?!(?:new|delete)(?![a-zA-Z¡-￿_0-9]))/, 457],
    [1, 461, 458],
    [1, 9, 459],
    [1, 466, 460,
     /^[a-zA-Z¡-￿_]/, -1],
    [1, 9, 459],
    [3, "keyword", e[20], 462,
     0, 463],
    [1, 9, 463],
    [0, 464,
     3, "type", e[18], -1],
    [1, 415, 465],
    [0, 464,
     3, "type qualified", e[18], -1],
    [2, 373, -1, {"name":"TemplateArgs"},
     "::", 467,
     1, 145, -1,
     "[", 469,
     /^[\*\&]/, -1,
     3, "keyword", e[31], -1],
    [1, 9, 468],
    [3, "type qualified", e[18], -1],
    [1, 9, 470],
    [3, "number", e[22], 471,
     0, 471],
    [1, 9, 472],
    ["]", -1],
    [3, "keyword", e[37], 474,
     3, "keyword", e[36], 478,
     2, 139, -1, {"name":"prefixOp","token":"operator"}],
    [1, 9, 475],
    ["[", 476,
     0, -1],
    [1, 9, 477],
    ["]", -1],
    [1, 9, 479],
    ["[", 480,
     0, 481],
    [1, 9, 482],
    [1, 9, 483],
    ["]", 481],
    ["(", 484,
     0, 485],
    [1, 9, 486],
    [1, 9, 487],
    [1, 221, 488],
    [1, 145, -1,
     0, -1],
    [1, 9, 489],
    [")", 485],
    [3, "keyword", e[52], -1,
     "[", 491,
     3, "keyword", e[53], 498,
     2, 676, 510, {"name":"ParenExpr"},
     3, "atom", e[54], -1,
     3, "number", e[22], -1,
     2, 134, -1, {"name":"string","token":"string"},
     2, 569, -1, {"name":"BlockOf"},
     3, "keyword", e[55], 513,
     1, 127, -1],
    [1, 9, 492],
    [/^(?!\[)/, 493],
    [1, 681, 494],
    [1, 9, 495],
    ["]", 496],
    [1, 9, 497],
    [2, 252, -1, {"name":"FunctionDef"},
     2, 199, -1, {"name":"Block"}],
    [1, 9, 499],
    ["<", 500],
    [1, 9, 501],
    [1, 438, 502],
    [1, 9, 503],
    [">", 504],
    [1, 9, 505],
    ["(", 506],
    [1, 9, 507],
    [1, 221, 508],
    [1, 9, 509],
    [")", -1],
    [1, 9, 511],
    [/^(?![\[\(\-\+])/, 512,
     0, -1],
    [1, 221, -1],
    [1, 9, 514],
    ["(", 515,
     e[49], 516],
    [1, 9, 517],
    [1, 9, 518],
    [1, 438, 519],
    [1, 221, 520],
    [1, 9, 521],
    [1, 9, 522],
    [")", 520],
    [3, "meta", e[17], 523],
    [1, 9, 524],
    [2, 322, -1, {"name":"ParenTokens"},
     0, -1],
    [1, 221, 526,
     0, -1],
    [1, 9, 527],
    [",", 528,
     0, -1],
    [1, 9, 529],
    [1, 221, 530],
    [1, 9, 527],
    ["::", -1,
     [5, 691], 532],
    [3, "qualifier def", e[18], 533],
    [2, 373, 534, {"name":"TemplateArgs"},
     0, 534],
    [1, 9, 535],
    ["::", -1],
    ["(", 537],
    [1, 9, 538],
    [1, 695, 539],
    [1, 9, 540],
    [")", -1],
    [1, 438, 542,
     0, -1],
    [1, 9, 543],
    [",", 544,
     0, -1],
    [1, 9, 545],
    [1, 438, 546],
    [1, 9, 543],
    [":", 548],
    [1, 9, 549],
    [1, 709, -1],
    [3, "keyword", e[34], 551,
     3, "def property", e[18], -1],
    [3, "operator", "->*", -1,
     ",", -1,
     3, "operator", e[35], -1,
     2, 139, -1, {"name":"prefixOp","token":"operator"},
     e[56], -1,
     3, "keyword", e[36], 552,
     3, "keyword", e[37], 552],
    [e[57], -1],
    [1, 438, 554],
    [1, 9, 555],
    [2, 579, 556, {"name":"fieldName","token":"property"},
     0, 556],
    [1, 9, 557],
    [":", 558,
     "[", 559,
     0, -1],
    [1, 9, 560],
    [1, 9, 561],
    [3, "number", e[22], -1],
    [3, "number", e[22], 562,
     0, 562],
    [1, 9, 563],
    ["]", -1],
    [2, 322, -1, {"name":"ParenTokens"},
     2, 715, -1, {"name":"BracketTokens"},
     2, 719, -1, {"name":"BraceTokens"},
     3, "keyword", /^(?:auto|double|int|struct|break|else|long|switch|case|enum|register|typedef|char|extern|return|union|const|float|short|unsigned|continue|for|signed|void|default|goto|sizeof|volatile|do|if|static|while|asm|alignof)(?![a-zA-Z¡-￿_0-9])/, -1,
     3, "keyword", /^(?:alignas|asm|bool|catch|class|compl|concept|constexpr|const_cast|decltype|delete|dynamic_cast|explicit|export|friend|import|module|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|reinterpret_cast|requires|static_assert|static_cast|synchronized|template|this|throw|try|typedef|typeid|using|virtual|wchar_t)(?![a-zA-Z¡-￿_0-9])/, -1,
     3, "atom", e[54], -1,
     3, "number", e[22], -1,
     2, 134, -1, {"name":"string","token":"string"},
     3, "operator", e[35], -1,
     2, 139, -1, {"name":"prefixOp","token":"operator"},
     0, 565,
     2, 366, -1, {"name":"unqualifiedVariableName","token":"variable"},
     /^(?![\)\]\}])./, -1],
    ["::", 566,
     /^(?=[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*\:\:)/, 567],
    [0, 565,
     2, 372, -1, {"name":"qualifiedVariableName","token":"qualified"}],
    [3, "variable qualifier", e[18], 568],
    ["::", 566],
    ["{", 570],
    [1, 9, 571],
    [1, 221, 572,
     0, 577],
    [1, 9, 573],
    [",", 574,
     0, 577],
    [1, 9, 575],
    [1, 221, 576,
     0, 576],
    [1, 9, 573],
    [1, 9, 578],
    ["}", -1],
    [3, "callee", e[58], -1,
     e[18], -1],
    [3, "variable qualifier", e[18], 581],
    [1, 723, 582,
     0, 582],
    [1, 9, 583],
    ["::", -1],
    [3, "keyword", e[27], 585,
     0, 586,
     0, 587,
     0, -1],
    [1, 9, 588],
    [1, 9, 589],
    [3, "keyword", e[29], 590,
     3, "keyword", e[30], 590,
     [5, 728], 591,
     1, 731, 592],
    [2, 373, 586, {"name":"TemplateArgs"}],
    [3, "keyword", e[23], 593,
     3, "keyword", e[20], 593],
    [1, 9, 587],
    [1, 438, 594],
    [1, 9, 595],
    [1, 9, 596],
    [1, 9, 597],
    [e[49], 598],
    [1, 438, 598],
    [2, 536, 592, {"name":"ParamList"},
     1, 363, 592,
     0, 592],
    [1, 9, 599],
    [",", 600,
     0, -1],
    [1, 9, 601],
    [3, "keyword", e[27], 602,
     0, 603,
     0, 604],
    [1, 9, 605],
    [1, 9, 606],
    [3, "keyword", e[29], 607,
     3, "keyword", e[30], 607,
     [5, 737], 608,
     1, 731, 609],
    [2, 373, 603, {"name":"TemplateArgs"}],
    [3, "keyword", e[23], 610,
     3, "keyword", e[20], 610],
    [1, 9, 604],
    [1, 438, 611],
    [1, 9, 612],
    [1, 9, 613],
    [1, 9, 614],
    [e[49], 615],
    [1, 438, 615],
    [2, 536, 609, {"name":"ParamList"},
     1, 363, 609,
     0, 609],
    [1, 9, 599],
    [3, "attribute", "{", 617,
     3, "attribute", /^(?:(?!\{|\}|\*\/).)+/, 616,
     "\n", 618,
     0, -1],
    [1, 616, 619],
    [/^[\t ]*(?:\*(?!\/)[\t ]*)?/, 616],
    [/^(?=\*\/)/, 616,
     3, "attribute", "}", 616],
    ["::", -1,
     [5, 740], 621],
    [3, "meta", e[18], 622],
    [2, 373, 623, {"name":"TemplateArgs"},
     0, 623],
    [1, 9, 624],
    ["::", -1],
    [3, "number", e[22], -1,
     2, 134, -1, {"name":"string","token":"string"},
     e[18], -1,
     3, "operator", e[35], -1,
     ",", -1,
     "(", 626,
     "[", 629,
     "{", 632],
    [1, 9, 627],
    [1, 625, 628,
     ")", -1],
    [1, 9, 627],
    [1, 9, 630],
    [1, 625, 631,
     "]", -1],
    [1, 9, 630],
    [1, 9, 633],
    [1, 625, 634,
     "}", -1],
    [1, 9, 633],
    [3, "type qualifier", e[18], 636],
    [1, 723, 637,
     0, 637],
    [1, 9, 638],
    ["::", -1],
    [3, "keyword", e[51], 640,
     2, 190, -1, {"name":"Template"},
     1, 177, -1,
     3, "keyword", e[0], 642,
     3, "meta", e[17], 646,
     1, 162, -1,
     2, 744, -1, {"name":"ObjectMember"}],
    [1, 9, 641],
    [":", -1],
    [1, 9, 643],
    [2, 226, 644, {"name":"ArgList"}],
    [1, 9, 645],
    [";", -1],
    [1, 9, 647],
    [2, 322, 648, {"name":"ParenTokens"},
     0, 648],
    [1, 9, 649],
    [/^\;?/, -1],
    [1, 762, 651,
     0, 652,
     0, -1],
    [1, 9, 653],
    [3, "keyword", e[29], 654,
     3, "keyword", e[30], 654,
     1, 438, 655],
    [",", 656,
     0, -1],
    [1, 9, 652],
    [1, 9, 657],
    [1, 9, 658],
    [e[49], 659],
    [1, 762, 660,
     0, 661],
    [1, 9, 662],
    [1, 9, 653],
    [3, "keyword", e[29], 663,
     3, "keyword", e[30], 663,
     1, 438, 664],
    [1, 231, 665],
    [1, 9, 661],
    [1, 9, 666],
    [1, 9, 667],
    [e[49], 668],
    [3, "operator", "=", 669,
     0, 651],
    [1, 9, 670],
    [1, 9, 671],
    [1, 231, 672],
    [1, 731, 651],
    [1, 9, 673],
    [3, "operator", "=", 674,
     0, 660],
    [1, 9, 675],
    [1, 731, 660],
    ["(", 677],
    [1, 9, 678],
    [1, 221, 679,
     0, 679],
    [1, 9, 680],
    [")", -1],
    [/^\&?/, 682,
     "=", 683,
     3, "keyword", e[52], 683,
     0, -1],
    [1, 9, 684],
    [1, 9, 685],
    [1, 127, 683,
     0, 683],
    [",", 686,
     0, -1],
    [1, 9, 687],
    [/^\&?/, 688,
     "=", 689,
     3, "keyword", e[52], 689],
    [1, 9, 690],
    [1, 9, 685],
    [1, 127, 689,
     0, 689],
    [3, "qualifier def", e[18], 692],
    [1, 723, 693,
     0, 693],
    [1, 9, 694],
    ["::", -1],
    [1, 438, 696,
     0, -1],
    [1, 9, 697],
    [1, 347, 698,
     0, 699],
    [1, 9, 700],
    [1, 9, 701],
    [2, 536, 699, {"name":"ParamList"},
     0, 699],
    [",", 702,
     0, -1],
    [1, 9, 703],
    [1, 438, 704],
    [1, 9, 705],
    [1, 347, 706,
     0, 707],
    [1, 9, 708],
    [1, 9, 701],
    [2, 536, 707, {"name":"ParamList"},
     0, 707],
    [1, 773, 710,
     0, -1],
    [1, 9, 711],
    [",", 712,
     0, -1],
    [1, 9, 713],
    [1, 773, 714],
    [1, 9, 711],
    ["[", 716],
    [1, 9, 717],
    [1, 564, 718,
     "]", -1],
    [1, 9, 717],
    ["{", 720],
    [1, 9, 721],
    [1, 564, 722,
     "}", -1],
    [1, 9, 721],
    ["<", 724],
    [1, 9, 725],
    [e[59], 726,
     ">", -1],
    [1, 723, 727,
     2, 134, 727, {"name":"string","token":"string"},
     /^[^]/, 727],
    [1, 9, 725],
    [1, 438, 729],
    [1, 9, 730],
    [e[60], -1],
    [1, 473, 732,
     1, 490, 733],
    [1, 9, 731],
    [1, 9, 734],
    [e[59], 735,
     0, -1],
    [1, 326, 736],
    [1, 9, 734],
    [1, 438, 738],
    [1, 9, 739],
    [e[60], -1],
    [3, "meta", e[18], 741],
    [1, 723, 742,
     0, 742],
    [1, 9, 743],
    ["::", -1],
    [3, "keyword", e[29], 745,
     3, "keyword", e[30], 745,
     3, "keyword", e[31], 745,
     3, "def", [0, [7, "localConstructorAhead"], /^\~?/, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/], 748,
     1, 438, 746],
    [1, 9, 744],
    [1, 9, 747],
    [1, 785, 748],
    [1, 9, 749],
    [2, 252, -1, {"name":"FunctionDef"},
     1, 363, 750,
     ":", 751,
     "[", 752,
     0, 750,
     3, "meta", e[17], 753],
    [1, 9, 754],
    [1, 9, 755],
    [1, 9, 756],
    [1, 9, 757],
    [";", -1],
    [3, "number", e[22], 750],
    [3, "number", e[22], 758,
     0, 758],
    [2, 322, 759, {"name":"ParenTokens"},
     0, 759],
    [1, 9, 760],
    [1, 9, 761],
    ["]", 750],
    [/^\;?/, -1],
    [3, "keyword", e[27], 763,
     0, 765],
    [1, 9, 764],
    [2, 373, 765, {"name":"TemplateArgs"}],
    [1, 9, 766],
    [3, "keyword", e[23], 767,
     3, "keyword", e[20], 767],
    [1, 9, 768],
    [3, "type def", e[18], 769],
    [1, 9, 770],
    [3, "operator", "=", 771,
     0, -1],
    [1, 9, 772],
    [1, 127, -1,
     3, "number", e[22], -1],
    [1, 367, 774,
     2, 579, 775, {"name":"fieldName","token":"property"}],
    [1, 9, 773],
    [1, 9, 776],
    ["(", 777,
     "{", 778],
    [1, 9, 779],
    [1, 9, 780],
    [1, 525, 781],
    [1, 525, 782],
    [1, 9, 783],
    [1, 9, 784],
    [")", -1],
    ["}", -1],
    [0, 786,
     "(", 793],
    [e[61], 787,
     1, 550, 788],
    [1, 9, 786],
    [1, 9, 789],
    ["[", 790,
     0, -1],
    [1, 9, 791],
    ["]", 792],
    [1, 9, 789],
    [1, 9, 794],
    [1, 785, 795],
    [1, 9, 796],
    [")", -1]
  ];
  var start = 0;
  var token = 5;

  var cpp = /*#__PURE__*/Object.freeze({
    nodes: nodes,
    start: start,
    token: token
  });

  function getScope(context, scopes) {
    for (var cx = context; cx; cx = cx.parent)
      { if (scopes.indexOf(cx.name) > -1) { return cx } }
  }
  function isLocal(context, name) {
    for (var cx = context; cx; cx = cx.parent)
      { if (cx.locals && cx.locals.indexOf(name) > -1) { return true } }
    return false
  }
  function isLocalType(context, name) {
    for (var cx = context; cx; cx = cx.parent)
      { if (cx.localTypes && cx.localTypes.indexOf(name) > -1) { return true } }
    return false
  }

  var varRE = /(^|\s)variable($|\s)/;

  function markLocals(type, scopes, stream, state) {
    if (type == "def") {
      var scope = getScope(state.context, scopes), name = stream.current();
      if (scope) {
        if (!scope.locals) { scope.locals = []; }
        if (scope.locals.indexOf(name) == -1) { scope.locals.push(name); }
        if (state.context.name != "funcName") { return "def local" }
      }
    } else if (varRE.test(type) && !/qualified/.test(type) &&
               isLocal(state.context, stream.current())) {
      type = type.replace(varRE, "$1variable-2$2");
    }
    return type
  }

  var typeRE = /(^|\s)type($|\s)/;

  function markTypeLocals(type, scopes, stream, state) {
    if (type == "type def") {
      var scope = getScope(state.context, scopes);
      if (scope) {
        if (!scope.localTypes) { scope.localTypes = []; }
        scope.localTypes.push(stream.current());
      }
    } else if (typeRE.test(type) && !/qualifie[rd]/.test(type) &&
               isLocalType(state.context, stream.current())) {
      type += " local";
    }
    return type
  }

  function hasSubStatement(context) {
    var m = /^(if|for|do|while|try)\b/.exec(context.startLine.slice(context.startPos));
    return m && m[1]
  }

  function isSwitch(context) {
    return context && context.name == "Statement" &&
      /^switch\b/.test(context.startLine.slice(context.startPos))
  }

  function isLabel(text) {
    return text && /^\s*(case|default)\b/.test(text)
  }

  function aligned(cx) {
    return !/^\s*((\/\/.*)?$|.*=>)/.test(cx.startLine.slice(cx.startPos + 1))
  }

  var bracketed = {
    Block: "}", BlockOf: "}", ClassBody: "}", AnnotationTypeBody: "}", ObjectLiteral: "}", ObjectPattern: "}", EnumBody: "}",
    ObjType: "}", ArrayInitializer: "}", NamespaceBlock: "}", BraceTokens: "}",
    ArrayLiteral: "]", BracketTokens: "]", TupleType: "]",
    ParamList: ")", SimpleParamList: ")", ArgList: ")", ParenExpr: ")", CondExpr: ")", ForSpec: ")", ParenTokens: ")",
    TypeParams: ">", TypeArgs: ">", TemplateArgs: ">", TemplateParams: ">"
  };

  var blockish = ["Block", "NamespaceBlock", "ClassBody", "AnnotationTypeBody", "BlockOf", "EnumBody"];

  var statementish = ["Statement", "ObjectMember", "ClassItem", "EnumConstant", "AnnotationTypeItem", "ArgExpr", "StatementMaybeOf", "NewExpr"];

  function baseIndent(cx, config) {
    for (var startLine = cx.startLine;; cx = cx.parent) {
      if (cx.name == "CondExpr")
        { return CodeMirror.countColumn(cx.startLine, cx.startPos + 1, config.tabSize) }
      if (statementish.indexOf(cx.name) > -1 && /(^\s*|[\(\{\[])$/.test(cx.startLine.slice(0, cx.startPos)))
        { return CodeMirror.countColumn(cx.startLine, cx.startPos, config.tabSize) }
      if (!cx.parent || cx.parent.startLine != startLine)
        { return CodeMirror.countColumn(cx.startLine, null, config.tabSize) }
    }
  }

  function findIndent(cx, textAfter, config) {
    if (!cx) { return 0 }
    if (cx.name == "string" || cx.name == "comment") { return CodeMirror.Pass }

    var brack = bracketed[cx.name];
    var closed = textAfter && textAfter.charAt(0) == brack;
    if (brack && config.align !== false && aligned(cx))
      { return CodeMirror.countColumn(cx.startLine, cx.startPos, config.tabSize) + (closed ? 0 : 1) }

    if (brack && blockish.indexOf(cx.name) > -1) {
      var parent = cx.parent;
      if (parent && parent.name == "Statement" && parent.parent &&
          parent.parent.name == "Statement" && hasSubStatement(parent.parent) && !hasSubStatement(parent))
        { parent = parent.parent; }
      var base$1 = statementIndent(parent, config);

      if (closed || cx.name == "NamespaceBlock") { return base$1 }
      if (/^(public|private|protected)\s*:/.test(textAfter)) { return base$1 + 1 }
      if (isSwitch(cx.parent) && !isLabel(textAfter)) { return base$1 + 2 * config.indentUnit }
      return base$1 + config.indentUnit
    }

    var base = baseIndent(cx, config.tabSize);
    if (brack) {
      if (closed && brack != ")") { return base }
      return base + config.indentUnit * (brack == ")" || brack == ">" ? 2 : 1)
    } else if (statementish.indexOf(cx.name) > -1) {
      if (hasSubStatement(cx)) { return base + config.indentUnit; }
      return base + 2 * config.indentUnit
    } else if (cx.name == "Alternative" || cx.name == "CatchFinally") {
      base = baseIndent(cx.parent, config.tabSize);
      if (!textAfter || /^else\b/.test(textAfter)) { return base }
      return base + config.indentUnit
    } else if (cx.name == "ArrowRest") {
      return base + config.indentUnit
    } else if (cx.name == "NewExpression" && cx.startLine.length > cx.startPos + 5) {
      return CodeMirror.countColumn(cx.startLine, cx.startPos, config.tabSize) + 2 * config.indentUnit
    } else if (cx.name == "InitializerList") {
      return base + 2
    } else if (cx.name == "ThrowsClause" && !/throws\s*$/.test(cx.startLine.slice(cx.startPos))) {
      return base + 2 * config.indentUnit
    } else {
      return findIndent(cx.parent, textAfter, config)
    }
  }

  function statementIndent(cx, config) {
    for (;; cx = cx.parent) {
      if (!cx) { return 0 }
      if (statementish.indexOf(cx.name) > -1 || (cx.parent && bracketed[cx.parent.name]))
        { return CodeMirror.countColumn(cx.startLine, null, config.tabSize) }
    }
  }

  function indent(state, textAfter, line, config) {
    var top = state.context && state.context.name;
    if (top == "DeclType" || top == "BeforeStatement" || top == "AnnotationHead" || top == "Template")
      { return statementIndent(state.context, config) }

    if ((top == "doccomment.braced" || top == "doccomment.tagGroup") && !/^[@*]/.test(textAfter))
      { return CodeMirror.countColumn(state.context.startLine, null, config.tabSize) + 2 * config.indentUnit }

    return findIndent(state.contextAt(line, line.length - textAfter.length), textAfter, config)
  }

  function constructorAhead(line, pos) {
    var match = /^(\w+)::~?(\w+)/.exec(line.slice(pos));
    return match && match[1] == match[2]
  }

  function localConstructorAhead(line, pos, cx) {
    var ahead = /^~?(\w+)\s*\(/.exec(line.slice(pos));
    if (!ahead) { return false }
    while (cx.name != "Statement") { cx = cx.parent; }
    var className = /\bclass\s+(\w+)/.exec(cx.startLine.slice(cx.startPos));
    return className ? className[1] == ahead[1] : false
  }

  var rawStringOpen = /R"(.*?)\(/g;

  function rawStringContinues(line, pos, cx) {
    rawStringOpen.lastIndex = cx.startPos;
    var closing = ")" + rawStringOpen.exec(cx.startLine)[1] + '"';
    return pos < closing.length - 1 || line.slice(pos - closing.length + 1, pos + 1) != closing
  }

  var scopes = ["Block", "FunctionDef"], typeScopes = ["Template"];

  var CppMode = (function (superclass) {
    function CppMode(conf) {
      superclass.call(this, cpp, {
        predicates: {constructorAhead: constructorAhead, localConstructorAhead: localConstructorAhead, rawStringContinues: rawStringContinues}
      });
      this.conf = conf;
    }

    if ( superclass ) CppMode.__proto__ = superclass;
    CppMode.prototype = Object.create( superclass && superclass.prototype );
    CppMode.prototype.constructor = CppMode;

    CppMode.prototype.token = function token$$1 (stream, state) {
      return markTypeLocals(markLocals(superclass.prototype.token.call(this, stream, state), scopes, stream, state), typeScopes, stream, state)
    };

    CppMode.prototype.indent = function indent$1 (state, textAfter, line) {
      if (textAfter.charAt(0) == "#") { return 0 }
      return indent(state, textAfter, line, this.conf)
    };

    return CppMode;
  }(CodeMirror.GrammarMode));

  CppMode.prototype.electricInput = /^\s*(?:case .*?:|(?:public|private|protected|default):|\{\}?|\})$/;
  CppMode.prototype.blockCommentStart = "/*";
  CppMode.prototype.blockCommentEnd = "*/";
  CppMode.prototype.blockCommentContinue = " * ";
  CppMode.prototype.lineComment = "//";
  CppMode.prototype.fold = "brace";

  CodeMirror.defineMode("google-cpp", function (conf) { return new CppMode(conf); });

})));
