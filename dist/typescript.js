(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

  var e = [/^(?:var|let|const)(?![a-zA-Z¡-￿_0-9_\$])/, /^while(?![a-zA-Z¡-￿_0-9_\$])/, /^with(?![a-zA-Z¡-￿_0-9_\$])/, /^do(?![a-zA-Z¡-￿_0-9_\$])/, /^debugger(?![a-zA-Z¡-￿_0-9_\$])/, /^if(?![a-zA-Z¡-￿_0-9_\$])/, /^function(?![a-zA-Z¡-￿_0-9_\$])/, /^for(?![a-zA-Z¡-￿_0-9_\$])/, /^default(?![a-zA-Z¡-￿_0-9_\$])/, /^case(?![a-zA-Z¡-￿_0-9_\$])/, /^return(?![a-zA-Z¡-￿_0-9_\$])/, /^throw(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9_\$])/, /^switch(?![a-zA-Z¡-￿_0-9_\$])/, /^try(?![a-zA-Z¡-￿_0-9_\$])/, /^class(?![a-zA-Z¡-￿_0-9_\$])/, /^export(?![a-zA-Z¡-￿_0-9_\$])/, /^import(?![a-zA-Z¡-￿_0-9_\$])/, [0, "async", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 153]], /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*/, /^extends(?![a-zA-Z¡-￿_0-9_\$])/, /^enum(?![a-zA-Z¡-￿_0-9_\$])/, [1, ";", /^(?=\})/, [7, "canInsertSemi"]], /^catch(?![a-zA-Z¡-￿_0-9_\$])/, /^finally(?![a-zA-Z¡-￿_0-9_\$])/, /^from(?![a-zA-Z¡-￿_0-9_\$])/, [1, "\n", "\t", " "], /^[a-zA-Z¡-￿__\$]/, /^const(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:true|false|null|undefined|NaN|Infinity)(?![a-zA-Z¡-￿_0-9_\$])/, /^new(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:0x[0-9a-fA-F]+|0o[0-7]+|0b[01]+|(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[eE][\+\-]?[0-9]+)?)/, /^else(?![a-zA-Z¡-￿_0-9_\$])/, /^as(?![a-zA-Z¡-￿_0-9_\$])/, [0, /^(?!\*\/|\@[a-zA-Z¡-￿_]|\{)/, /^[^]/], /^(?:super|this)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:delete|typeof|yield|await)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:\.\.\.|\!|\+\+?|\-\-?)/, /^\/(?![\/\*])(?:\\.|\[(?:(?!\]).)*\]|(?!\/).)+\/[gimyus]*/, [0, /^[a-zA-Z¡-￿__\$]/, /^[a-zA-Z¡-￿_0-9_\$]*/, [5, 497]], /^(?:\+\+|\-\-)/, /^(?:\+|\-|\%|\*|\/(?![\/\*])|\>\>?\>?|\<\<?|\=\=?|\&\&?|\|\|?|\^|\!\=)\=?/, /^(?:in|instanceof)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:public|private|protected|readonly|abstract|static)(?![a-zA-Z¡-￿_0-9_\$])/, [0, /^[a-zA-Z¡-￿__\$]/, /^[a-zA-Z¡-￿_0-9_\$]*/, [5, 522]], /^(?:\.\.\.)?/, /^is(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:get|set|async)(?![a-zA-Z¡-￿_0-9_\$])(?! *[\,\}\:\(\<])/];
  var nodes = [
    [1, 6, 2],
    [/^[^]/, 0],
    [1, 6, 3],
    [2, 7, 4, {"name":"Statement"},
     0, 1],
    [1, 6, 3],
    [3, "keyword", e[0], -1,
     3, "keyword", e[1], -1,
     3, "keyword", e[2], -1,
     3, "keyword", e[32], -1,
     3, "keyword", e[3], -1,
     3, "keyword", e[14], -1,
     3, "keyword", e[24], -1,
     3, "keyword", e[10], -1,
     3, "keyword", e[11], -1,
     3, "keyword", e[12], -1,
     3, "keyword", e[4], -1,
     3, "keyword", e[9], -1,
     3, "keyword", e[8], -1,
     3, "keyword", e[6], -1,
     3, "keyword", e[5], -1,
     3, "keyword", e[23], -1,
     3, "keyword", e[7], -1,
     3, "keyword", e[13], -1,
     3, "keyword", e[15], -1,
     3, "keyword", e[16], -1,
     3, "keyword", e[17], -1,
     3, "keyword", e[20], -1,
     3, "keyword", e[18], -1,
     3, "keyword", e[30], -1,
     3, "keyword", e[42], -1,
     3, "keyword", e[36], -1,
     3, "keyword", e[35], -1,
     3, "atom", e[29], -1,
     3, "variable", e[19], -1,
     3, "operator", e[37], -1,
     3, "operator", e[41], -1,
     3, "operator", e[40], -1,
     2, 155, -1, {"name":"string","token":"string"},
     3, "number", e[31], -1,
     2, 160, -1, {"name":"comment","token":"comment"},
     3, "string-2", e[38], -1,
     1, 166, -1,
     /^[^]/, -1],
    [e[26], 6,
     2, 160, 6, {"name":"comment","token":"comment"},
     0, -1],
    [3, "keyword", [0, "type", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 170]], 8,
     3, "keyword", [0, "namespace", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 171]], 18,
     3, "keyword", [0, "interface", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 172]], 26,
     [5, 173], 36,
     3, "keyword", e[21], 37,
     3, "keyword", [0, "declare", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 176]], 43,
     3, "keyword", /^abstract(?![a-zA-Z¡-￿_0-9_\$])/, 43,
     3, "keyword", e[0], 45,
     3, "keyword", e[1], 52,
     3, "keyword", e[2], 52,
     3, "keyword", e[3], 56,
     2, 177, -1, {"name":"Block"},
     ";", -1,
     3, "keyword", e[4], -1,
     3, "keyword", e[5], 64,
     3, "keyword", e[6], 69,
     3, "keyword", e[7], 75,
     3, "keyword", e[8], 77,
     /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= *\:)/, 77,
     3, "keyword", e[9], 78,
     3, "keyword", e[10], 81,
     3, "keyword", e[11], 85,
     3, "keyword", e[12], 89,
     3, "keyword", e[13], 93,
     3, "keyword", e[14], 97,
     3, "keyword", e[15], 113,
     3, "keyword", e[16], 117,
     3, "keyword", e[17], 129,
     3, "keyword", e[18], 145,
     "@", 147,
     1, 181, 151],
    [1, 6, 9],
    [3, "def type", e[19], 10],
    [1, 6, 11],
    [2, 187, 12, {"name":"TypeParams"},
     0, 12],
    [1, 6, 13],
    [3, "operator", "=", 14],
    [1, 6, 15],
    [1, 192, 16],
    [1, 6, 17],
    [e[22], -1],
    [1, 6, 19],
    [[5, 225], 20,
     3, "def", e[19], 21],
    [3, "variable", e[19], 22],
    [1, 6, 23],
    [1, 6, 24],
    [2, 177, -1, {"name":"Block"}],
    [".", 25],
    [1, 6, 19],
    [1, 6, 27],
    [3, "def type", e[19], 28],
    [1, 6, 29],
    [2, 187, 30, {"name":"TypeParams"},
     0, 30],
    [1, 6, 31],
    [3, "keyword", e[20], 32,
     0, 33],
    [1, 6, 34],
    [1, 6, 35],
    [1, 228, 33],
    [2, 234, -1, {"name":"ObjType"}],
    [3, "keyword", e[28], 38],
    [1, 6, 39],
    [1, 6, 40],
    [3, "def type", e[19], 41],
    [3, "keyword", e[21], 37],
    [1, 6, 42],
    [2, 242, -1, {"name":"EnumBody"}],
    [1, 6, 44],
    [2, 7, -1, {"name":"Statement"}],
    [1, 6, 46],
    [1, 247, 47],
    [1, 6, 48],
    [",", 49,
     e[22], -1],
    [1, 6, 50],
    [1, 247, 51],
    [1, 6, 48],
    [1, 6, 53],
    [2, 256, 54, {"name":"CondExpr"}],
    [1, 6, 55],
    [2, 7, -1, {"name":"Statement"}],
    [1, 6, 57],
    [2, 7, 58, {"name":"Statement"}],
    [1, 6, 59],
    [3, "keyword", e[1], 60,
     0, -1],
    [1, 6, 61],
    [2, 256, 62, {"name":"CondExpr"}],
    [1, 6, 63],
    [e[22], -1],
    [1, 6, 65],
    [2, 256, 66, {"name":"CondExpr"}],
    [1, 6, 67],
    [2, 7, 68, {"name":"Statement"}],
    [2, 261, -1, {"name":"Alternative"}],
    [1, 6, 70],
    [3, "keyword", "*", 71,
     0, 71],
    [1, 6, 72],
    [3, "def", e[19], 73],
    [1, 6, 74],
    [2, 265, -1, {"name":"FunctionDef"}],
    [1, 6, 76],
    [2, 272, -1, {"name":"ForStatement"}],
    [1, 6, 79],
    [1, 6, 80],
    [":", -1],
    [1, 181, 77],
    [1, 6, 82],
    [e[22], -1,
     1, 181, 83],
    [1, 6, 84],
    [e[22], -1],
    [1, 6, 86],
    [1, 181, 87],
    [1, 6, 88],
    [e[22], -1],
    [1, 6, 90],
    [/^(?:[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*)?/, 91],
    [1, 6, 92],
    [e[22], -1],
    [1, 6, 94],
    [2, 256, 95, {"name":"CondExpr"}],
    [1, 6, 96],
    [2, 177, -1, {"name":"Block"}],
    [1, 6, 98],
    [2, 177, 99, {"name":"Block"}],
    [1, 6, 100],
    [3, "keyword", e[23], 101,
     0, 102],
    [1, 6, 103],
    [1, 6, 104],
    ["(", 105],
    [3, "keyword", e[24], 106,
     0, -1],
    [1, 6, 107],
    [1, 6, 108],
    [3, "def", e[19], 109],
    [2, 177, -1, {"name":"Block"}],
    [1, 6, 110],
    [")", 111],
    [1, 6, 112],
    [2, 177, 102, {"name":"Block"}],
    [1, 6, 114],
    [3, "def type", e[19], 115],
    [1, 6, 116],
    [1, 275, -1],
    [1, 6, 118],
    ["*", 119,
     3, "keyword", e[8], 119,
     "{", 120,
     2, 7, -1, {"name":"Statement"}],
    [1, 6, 121],
    [1, 6, 122],
    [3, "keyword", e[25], 123,
     0, 124],
    [1, 286, 125],
    [1, 6, 126],
    [1, 6, 127],
    [1, 6, 128],
    [2, 155, 124, {"name":"string","token":"string"}],
    [e[22], -1],
    ["}", 119],
    [1, 6, 130],
    [2, 155, 131, {"name":"string","token":"string"},
     3, "keyword", "*", 132,
     1, 292, 133,
     "{", 134],
    [1, 6, 135],
    [1, 6, 136],
    [1, 6, 137],
    [1, 6, 138],
    [e[22], -1],
    [3, "keyword", e[33], 139,
     0, 133],
    [3, "keyword", e[25], 140,
     0, 131],
    [1, 286, 141],
    [1, 6, 142],
    [1, 6, 143],
    [1, 6, 144],
    [3, "def", e[19], 133],
    [2, 155, 131, {"name":"string","token":"string"}],
    ["}", 133],
    [1, 6, 146],
    [2, 7, -1, {"name":"Statement"}],
    [1, 6, 148],
    [1, 181, 149],
    [1, 6, 150],
    [2, 7, -1, {"name":"Statement"}],
    [1, 6, 152],
    [e[22], -1],
    [1, 6, 154],
    [3, "keyword", e[6], -1,
     /^(?:[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*|\()/, -1],
    ["'", 156,
     "\"", 158],
    ["\\", 157,
     /^(?!\')./, 156,
     "'", -1],
    [/^[^]/, 156],
    ["\\", 159,
     /^(?!\")./, 158,
     "\"", -1],
    [/^[^]/, 158],
    [/^\/\*\*(?!\/)/, 161,
     "/*", 165,
     /^\/\/.*/, -1],
    [0, 162,
     2, 297, 161, {"name":"doccomment.braced"},
     0, 163],
    [e[34], 164],
    [2, 301, 163, {"name":"doccomment.tagGroup"},
     "*/", -1],
    [0, 162,
     0, 161],
    [[0, /^(?!\*\/)/, /^[^]/], 165,
     "*/", -1],
    [3, "string-2", "`", 167],
    [3, "string-2", "${", 168,
     2, 305, 167, {"name":"str2","token":"string-2"},
     3, "string-2", /^(?:(?!\`|\$\{|\\).)+/, 167,
     3, "string-2", "`", -1],
    [1, 181, 169],
    [3, "string-2", "}", 167],
    [e[26], 170,
     e[27], -1],
    [e[26], 171,
     e[27], -1],
    [e[26], 172,
     e[27], -1],
    [3, "keyword", e[28], 174],
    [1, 6, 175],
    [3, "keyword", e[21], -1],
    [e[26], 176,
     e[27], -1],
    ["{", 178],
    [1, 6, 179],
    [2, 7, 180, {"name":"Statement"},
     "}", -1],
    [1, 6, 179],
    [1, 307, 182],
    [1, 6, 183],
    [",", 184,
     1, 329, 185,
     0, -1],
    [1, 6, 186],
    [1, 6, 183],
    [1, 181, 185],
    ["<", 188],
    [1, 6, 189],
    [1, 348, 190],
    [1, 6, 191],
    [">", -1],
    [3, "keyword", /^this(?![a-zA-Z¡-￿_0-9_\$])/, 216,
     3, "atom", e[29], 216,
     3, "keyword", /^typeof(?![a-zA-Z¡-￿_0-9_\$])/, 193,
     3, "keyword", /^keyof(?![a-zA-Z¡-￿_0-9_\$])/, 194,
     [0, [5, 362], "("], 195,
     3, "keyword", e[30], 196,
     0, 196,
     0, 197,
     2, 365, 216, {"name":"TupleType"},
     2, 234, 216, {"name":"ObjType"},
     2, 155, 216, {"name":"string","token":"string"},
     3, "number", e[31], 216],
    [1, 6, 198],
    [1, 6, 199],
    [1, 6, 200],
    [1, 6, 201],
    [[5, 370], 202,
     3, "type", e[19], 203],
    [1, 373, 216],
    [1, 192, 216],
    [1, 192, 204],
    [2, 187, 205, {"name":"TypeParams"},
     0, 205],
    [3, "variable", e[19], 206],
    [1, 6, 207],
    [1, 6, 208],
    [1, 6, 209],
    [1, 6, 210],
    [2, 377, 216, {"name":"TypeArgs"},
     0, 216],
    [")", 216],
    [2, 382, 211, {"name":"ParamListSpec"}],
    [".", 212],
    [1, 6, 213],
    [1, 6, 197],
    [3, "operator", "=>", 214],
    [1, 6, 215],
    [1, 192, 216],
    [1, 6, 217],
    [3, "operator", "&", 218,
     3, "operator", "|", 218,
     "[", 219,
     0, -1],
    [1, 6, 220],
    [1, 6, 221],
    [1, 192, 222],
    [1, 192, 223,
     0, 223],
    [1, 6, 217],
    [1, 6, 224],
    ["]", 222],
    [e[19], 226],
    [1, 6, 227],
    [".", -1],
    [1, 192, 229,
     0, -1],
    [1, 6, 230],
    [",", 231,
     0, -1],
    [1, 6, 232],
    [1, 192, 233,
     0, 233],
    [1, 6, 230],
    ["{", 235],
    [1, 6, 236],
    [1, 383, 237,
     0, 237],
    [1, 6, 238],
    [/^[\,\;]/, 239,
     "}", -1],
    [1, 6, 240],
    [1, 383, 241,
     0, 241],
    [1, 6, 238],
    ["{", 243],
    [1, 6, 244],
    [1, 412, 245],
    [1, 6, 246],
    ["}", -1],
    [1, 426, 248],
    [1, 6, 249],
    [":", 250,
     0, 252],
    [1, 6, 251],
    [1, 192, 252],
    [1, 6, 253],
    [3, "operator", "=", 254,
     0, -1],
    [1, 6, 255],
    [1, 373, -1],
    ["(", 257],
    [1, 6, 258],
    [1, 181, 259],
    [1, 6, 260],
    [")", -1],
    [1, 6, 262],
    [3, "keyword", e[32], 263,
     0, -1],
    [1, 6, 264],
    [2, 7, -1, {"name":"Statement"}],
    [2, 187, 266, {"name":"TypeParams"},
     0, 266],
    [1, 6, 267],
    [2, 429, 268, {"name":"ParamList"}],
    [1, 6, 269],
    [1, 434, 270,
     0, 270],
    [1, 6, 271],
    [2, 177, -1, {"name":"Block"},
     e[22], -1],
    [2, 442, 273, {"name":"ForSpec"}],
    [1, 6, 274],
    [2, 7, -1, {"name":"Statement"}],
    [2, 187, 276, {"name":"TypeParams"},
     0, 276],
    [1, 6, 277],
    [3, "keyword", e[20], 278,
     0, 280],
    [1, 6, 279],
    [1, 192, 280],
    [1, 6, 281],
    [3, "keyword", /^implements(?![a-zA-Z¡-￿_0-9_\$])/, 282,
     0, 284],
    [1, 6, 283],
    [1, 228, 284],
    [1, 6, 285],
    [2, 453, -1, {"name":"ClassBody"}],
    [1, 292, 287,
     0, -1],
    [1, 6, 288],
    [",", 289,
     0, -1],
    [1, 6, 290],
    [1, 292, 291,
     0, 291],
    [1, 6, 288],
    [3, "variable", /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= +as)/, 293,
     3, "def", e[19], -1],
    [1, 6, 294],
    [3, "keyword", e[33], 295],
    [1, 6, 296],
    [3, "def", e[19], -1],
    ["{", 298],
    [1, 481, 299,
     2, 487, 300, {"name":"doccomment.type"}],
    [[0, /^(?!\}|\*\/)/, /^[^]/], 299,
     0, 300],
    ["}", -1],
    [1, 481, 302],
    [0, 303,
     2, 297, 302, {"name":"doccomment.braced"},
     0, -1],
    [e[34], 304],
    [0, 303,
     0, 302],
    ["\\", 306,
     "\n", -1],
    [/^[^]/, -1],
    [3, "atom", e[29], -1,
     3, "keyword", e[35], -1,
     3, "keyword", e[36], 308,
     3, "operator", e[37], 308,
     3, "keyword", e[18], 308,
     3, "keyword", e[30], 310,
     3, "keyword", e[6], 316,
     3, "keyword", e[15], 322,
     2, 491, -1, {"name":"ArrowFunc"},
     3, "variable callee", e[39], 327,
     3, "variable", e[19], -1,
     3, "number", e[31], -1,
     2, 155, -1, {"name":"string","token":"string"},
     3, "string-2", e[38], -1,
     1, 166, -1,
     2, 501, -1, {"name":"ArrayLiteral"},
     2, 506, -1, {"name":"ObjectLiteral"},
     2, 511, -1, {"name":"ParenExpr"}],
    [1, 6, 309],
    [1, 307, -1],
    [1, 6, 311],
    [".", 312,
     3, "variable callee", e[39], 313,
     1, 307, -1],
    [1, 6, 314],
    [1, 6, 315],
    [3, "keyword", /^target(?![a-zA-Z¡-￿_0-9_\$])/, -1],
    [2, 377, -1, {"name":"TypeArgs"},
     0, -1],
    [1, 6, 317],
    [3, "keyword", "*", 318,
     0, 318],
    [1, 6, 319],
    [3, "def", e[19], 320,
     0, 320],
    [1, 6, 321],
    [2, 265, -1, {"name":"FunctionDef"}],
    [1, 6, 323],
    [[6, 516], 324,
     0, 325],
    [3, "def type", e[19], 325],
    [1, 6, 326],
    [1, 275, -1],
    [1, 6, 328],
    [2, 377, -1, {"name":"TypeArgs"},
     0, -1],
    [3, "keyword", e[33], 330,
     3, "operator", "!", -1,
     3, "operator", e[40], -1,
     3, "operator", e[41], 332,
     3, "keyword", e[42], 332,
     2, 517, -1, {"name":"ArgList"},
     1, 166, -1,
     ".", 334,
     "[", 338,
     3, "operator", "?", 342],
    [1, 6, 331],
    [1, 192, -1],
    [1, 6, 333],
    [1, 181, -1],
    [1, 6, 335],
    [3, "property callee", e[44], 336,
     3, "property", e[19], -1],
    [1, 6, 337],
    [2, 377, -1, {"name":"TypeArgs"},
     0, -1],
    [1, 6, 339],
    [1, 181, 340],
    [1, 6, 341],
    ["]", -1],
    [1, 6, 343],
    [1, 181, 344],
    [1, 6, 345],
    [3, "operator", ":", 346],
    [1, 6, 347],
    [1, 181, -1],
    [3, "def type", e[19], 349,
     0, -1],
    [1, 6, 350],
    [3, "keyword", e[20], 351,
     0, 352],
    [1, 6, 353],
    [1, 6, 354],
    [1, 192, 352],
    [",", 355,
     0, -1],
    [1, 6, 356],
    [3, "def type", e[19], 357,
     0, 358],
    [1, 6, 359],
    [1, 6, 354],
    [3, "keyword", e[20], 360,
     0, 358],
    [1, 6, 361],
    [1, 192, 358],
    ["(", 363],
    [1, 6, 364],
    [[6, 526], -1],
    ["[", 366],
    [1, 6, 367],
    [1, 228, 368],
    [1, 6, 369],
    ["]", -1],
    [e[19], 371],
    [1, 6, 372],
    [".", -1],
    [1, 307, 374],
    [1, 6, 375],
    [1, 529, 376,
     0, -1],
    [1, 6, 375],
    ["<", 378],
    [1, 6, 379],
    [1, 228, 380],
    [1, 6, 381],
    [">", -1],
    [2, 429, -1, {"name":"ParamList"}],
    [3, "keyword", e[30], 384,
     0, 384,
     0, 390],
    [1, 6, 385],
    [2, 187, 386, {"name":"TypeParams"},
     0, 386],
    [1, 6, 387],
    [2, 429, 388, {"name":"ParamList"}],
    [1, 6, 389],
    [1, 434, -1,
     0, -1],
    [3, "keyword", e[43], 391,
     "[", 392,
     3, "def property", e[19], 393,
     2, 155, 393, {"name":"string","token":"string"},
     3, "number", e[31], 393],
    [1, 6, 390],
    [1, 6, 394],
    [1, 6, 395],
    [e[19], 396],
    [/^\??/, 397],
    [1, 6, 398],
    [1, 6, 399],
    [":", 400],
    [2, 187, 401, {"name":"TypeParams"},
     0, 401,
     0, 402],
    [1, 6, 403],
    [1, 6, 404],
    [1, 6, 405],
    [1, 192, 406],
    [2, 429, 402, {"name":"ParamList"}],
    [1, 434, -1,
     0, -1],
    [1, 6, 407],
    ["]", 408],
    [1, 6, 409],
    [":", 410],
    [1, 6, 411],
    [1, 192, -1],
    [3, "def property", e[19], 413,
     0, -1],
    [1, 6, 414],
    [3, "operator", "=", 415,
     0, 416],
    [1, 6, 417],
    [1, 6, 418],
    [1, 373, 416],
    [",", 419,
     0, -1],
    [1, 6, 420],
    [3, "def property", e[19], 421,
     0, 422],
    [1, 6, 423],
    [1, 6, 418],
    [3, "operator", "=", 424,
     0, 422],
    [1, 6, 425],
    [1, 373, 422],
    [3, "operator", "...", 427,
     0, 427],
    [1, 6, 428],
    [3, "def", e[19], -1,
     2, 548, -1, {"name":"ArrayPattern"},
     2, 553, -1, {"name":"ObjectPattern"}],
    ["(", 430],
    [1, 6, 431],
    [1, 558, 432],
    [1, 6, 433],
    [")", -1],
    [":", 435],
    [1, 6, 436],
    [[5, 590], 437,
     0, 440],
    [3, "variable", e[19], 438],
    [1, 6, 439],
    [3, "keyword", e[46], 440],
    [1, 6, 441],
    [1, 192, -1],
    ["(", 443],
    [1, 6, 444],
    [2, 593, 445, {"name":"StatementMaybeOf"}],
    [1, 6, 446],
    [1, 181, 447,
     0, 447,
     0, 451],
    [1, 6, 448],
    [";", 449],
    [1, 6, 450],
    [1, 181, 451,
     0, 451],
    [1, 6, 452],
    [")", -1],
    ["{", 454],
    [1, 6, 455],
    [0, 456,
     "@", 457,
     "}", -1],
    [3, "keyword", e[43], 458,
     3, "keyword", e[47], 459,
     0, 459],
    [1, 6, 460],
    [1, 6, 456],
    [1, 6, 461],
    [1, 181, 462],
    [3, "def property", e[19], 463,
     "[", 464,
     3, "number", e[31], 463,
     2, 155, 463, {"name":"string","token":"string"}],
    [1, 6, 455],
    [1, 6, 465],
    [1, 6, 466],
    [3, "keyword", "*", 467,
     0, 467,
     /^\??/, 468],
    [1, 181, 469],
    [1, 6, 470],
    [1, 6, 471],
    [1, 6, 472],
    [2, 265, 462, {"name":"FunctionDef"}],
    [":", 473,
     0, 474],
    ["]", 463],
    [1, 6, 475],
    [1, 6, 476],
    [1, 192, 474],
    [3, "operator", "=", 477,
     0, 478],
    [1, 6, 479],
    [1, 6, 480],
    [1, 181, 478],
    [e[22], 462],
    [3, "tag", /^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z¡-￿_])/, 482,
     3, "tag", /^\@[a-zA-Z¡-￿_]+/, -1],
    [e[26], 482,
     "{", 483,
     0, 484,
     0, -1],
    [2, 487, 485, {"name":"doccomment.type"}],
    [3, "def", /^[a-zA-Z¡-￿_]+/, -1,
     0, -1],
    ["}", 486],
    [[1, "\n", "\t", " ", "*"], 486,
     0, 484],
    [3, "type", "{", 488,
     3, "type", /^(?:(?!\{|\}|\*\/).)+/, 487,
     "\n", 489,
     0, -1],
    [2, 487, 490, {"name":"doccomment.type"}],
    [/^[\t ]*(?:\*[\t ]*)?/, 487],
    [/^(?=\*\/)/, 487,
     3, "type", "}", 487],
    [3, "def", [0, /^[a-zA-Z¡-￿__\$]/, /^[a-zA-Z¡-￿_0-9_\$]*/, [5, 598]], 495,
     [5, 604], 492],
    [2, 429, 493, {"name":"ParamList"}],
    [1, 6, 494],
    [1, 434, 495,
     0, 495],
    [1, 6, 496],
    [2, 609, -1, {"name":"ArrowRest"}],
    [/^ */, 498],
    [1, 612, 499,
     0, 500],
    [/^ */, 500],
    ["(", -1],
    ["[", 502],
    [1, 6, 503],
    [1, 614, 504],
    [1, 6, 505],
    ["]", -1],
    ["{", 507],
    [1, 6, 508],
    [1, 620, 509],
    [1, 6, 510],
    ["}", -1],
    ["(", 512],
    [1, 6, 513],
    [1, 181, 514],
    [1, 6, 515],
    [")", -1],
    [3, "keyword", e[20], -1],
    ["(", 518],
    [1, 6, 519],
    [1, 614, 520],
    [1, 6, 521],
    [")", -1],
    [/^ */, 523],
    [1, 612, 524,
     0, 525],
    [/^ */, 525],
    ["(", -1],
    [/^(?:\)|\.\.\.)/, -1,
     e[19], 527],
    [1, 6, 528],
    [/^[\?\:]/, -1],
    [3, "keyword", e[33], 530,
     3, "operator", "!", -1,
     3, "operator", e[40], -1,
     3, "operator", e[41], 532,
     3, "keyword", e[42], 532,
     2, 517, -1, {"name":"ArgList"},
     1, 166, -1,
     ".", 534,
     "[", 538,
     3, "operator", "?", 542],
    [1, 6, 531],
    [1, 192, -1],
    [1, 6, 533],
    [1, 373, -1],
    [1, 6, 535],
    [3, "property callee", e[44], 536,
     3, "property", e[19], -1],
    [1, 6, 537],
    [2, 377, -1, {"name":"TypeArgs"},
     0, -1],
    [1, 6, 539],
    [1, 181, 540],
    [1, 6, 541],
    ["]", -1],
    [1, 6, 543],
    [1, 181, 544],
    [1, 6, 545],
    [3, "operator", ":", 546],
    [1, 6, 547],
    [1, 373, -1],
    ["[", 549],
    [1, 6, 550],
    [1, 626, 551],
    [1, 6, 552],
    ["]", -1],
    ["{", 554],
    [1, 6, 555],
    [1, 632, 556],
    [1, 6, 557],
    ["}", -1],
    [3, "keyword", e[43], 559,
     e[45], 560,
     0, -1],
    [1, 6, 558],
    [1, 6, 561],
    [1, 426, 562],
    [1, 6, 563],
    [/^\??/, 564],
    [1, 6, 565],
    [":", 566,
     0, 567],
    [1, 6, 568],
    [1, 6, 569],
    [1, 192, 567],
    [3, "operator", "=", 570,
     0, 571],
    [1, 6, 572],
    [1, 6, 573],
    [1, 373, 571],
    [",", 574,
     0, -1],
    [1, 6, 575],
    [3, "keyword", e[43], 576,
     e[45], 577,
     0, 578],
    [1, 6, 575],
    [1, 6, 579],
    [1, 6, 573],
    [1, 426, 580],
    [1, 6, 581],
    [/^\??/, 582],
    [1, 6, 583],
    [":", 584,
     0, 585],
    [1, 6, 586],
    [1, 6, 587],
    [1, 192, 585],
    [3, "operator", "=", 588,
     0, 578],
    [1, 6, 589],
    [1, 373, 578],
    [e[19], 591],
    [1, 6, 592],
    [3, "keyword", e[46], -1],
    [2, 7, 594, {"name":"Statement"}],
    [1, 6, 595],
    [3, "keyword", /^of(?![a-zA-Z¡-￿_0-9_\$])/, 596,
     0, -1],
    [1, 6, 597],
    [1, 181, -1],
    [1, 6, 599],
    [":", 600,
     0, 603],
    [1, 6, 601],
    [1, 192, 602],
    [1, 6, 603],
    ["=>", -1],
    [2, 429, 605, {"name":"ParamList"}],
    [1, 6, 606],
    [1, 434, 607,
     0, 607],
    [1, 6, 608],
    ["=>", -1],
    [3, "operator", "=>", 610],
    [1, 6, 611],
    [2, 177, -1, {"name":"Block"},
     1, 373, -1],
    ["<", 613],
    [1, 612, 613,
     [1, "=>", [0, /^(?!\>)/, /^[^]/]], 613,
     ">", -1],
    [1, 373, 615,
     0, -1],
    [1, 6, 616],
    [",", 617,
     0, -1],
    [1, 6, 618],
    [1, 373, 619,
     0, 619],
    [1, 6, 616],
    [2, 638, 621, {"name":"ObjectMember"},
     0, -1],
    [1, 6, 622],
    [",", 623,
     0, -1],
    [1, 6, 624],
    [2, 638, 625, {"name":"ObjectMember"},
     0, 625],
    [1, 6, 622],
    [1, 653, 627,
     0, -1],
    [1, 6, 628],
    [",", 629,
     0, -1],
    [1, 6, 630],
    [1, 653, 631,
     0, 631],
    [1, 6, 628],
    [1, 658, 633,
     0, -1],
    [1, 6, 634],
    [",", 635,
     0, -1],
    [1, 6, 636],
    [1, 658, 637,
     0, 637],
    [1, 6, 634],
    [3, "keyword", e[47], 639,
     0, 639],
    [1, 6, 640],
    [3, "def property", e[19], 641,
     "[", 642,
     3, "number", e[31], 641,
     2, 155, 641, {"name":"string","token":"string"},
     3, "operator", "...", 643],
    [1, 6, 644],
    [1, 6, 645],
    [1, 6, 646],
    [3, "keyword", "*", 647,
     0, 647,
     ":", 648,
     0, -1],
    [1, 181, 649],
    [1, 373, -1],
    [1, 6, 650],
    [1, 6, 651],
    [1, 6, 652],
    [2, 265, -1, {"name":"FunctionDef"}],
    [1, 373, -1],
    ["]", 641],
    [1, 426, 654],
    [1, 6, 655],
    [3, "operator", "=", 656,
     0, -1],
    [1, 6, 657],
    [1, 373, -1],
    [3, "def", /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?![a-z]|[A-Z]|[¡-￿]|_|[0-9]|_|\$| *\:)/, 659,
     3, "property", e[19], 663,
     3, "operator", "...", 667],
    [1, 6, 660],
    [3, "operator", "=", 661,
     0, -1],
    [1, 6, 662],
    [1, 373, -1],
    [1, 6, 664],
    [":", 665],
    [1, 6, 666],
    [1, 653, -1],
    [1, 6, 668],
    [1, 653, -1]
  ];
  var start = 0;
  var token = 5;

  var grammar = /*#__PURE__*/Object.freeze({
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

  function hasSubStatement(context) {
    var m = /^(if|for|do|while)\b/.exec(context.startLine.slice(context.startPos));
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
    Block: "}", BlockOf: "}", ClassBody: "}", AnnotationTypeBody: "}", ObjectLiteral: "}", EnumBody: "}", ObjType: "}",
    ArrayInitializer: "}", NamespaceBlock: "}", BraceTokens: "}",
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
          parent.parent.name == "Statement" && hasSubStatement(parent.parent))
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
    } else if (cx.name == "Alternative") {
      base = baseIndent(cx.parent, config.tabSize);
      if (!textAfter || /^else\b/.test(textAfter)) { return base }
      return base + config.indentUnit
    } else if (cx.name == "ArrowRest") {
      return base + config.indentUnit
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

  function canInsertSemi(string, pos) {
    for (var i = pos - 1; i >= 0; i--) {
      var ch = string.charCodeAt(i);
      if (ch === 10) { break }
      if (ch !== 32 && ch !== 9) { return false }
    }
    return true
  }

  var scopes = ["Block", "FunctionDef", "ArrowFunc", "ForStatement", "ParamListSpec"];

  var TSMode = (function (superclass) {
    function TSMode(conf, modeConf) {
      superclass.call(this, grammar, {
        predicates: {canInsertSemi: modeConf.requireSemicolons === false ? canInsertSemi : function () { return false; }}
      });
      this.conf = conf;
    }

    if ( superclass ) TSMode.__proto__ = superclass;
    TSMode.prototype = Object.create( superclass && superclass.prototype );
    TSMode.prototype.constructor = TSMode;

    TSMode.prototype.token = function token$$1 (stream, state) {
      return markLocals(superclass.prototype.token.call(this, stream, state), scopes, stream, state)
    };

    TSMode.prototype.indent = function indent$1 (state, textAfter, line) {
      if (!textAfter) { textAfter = line = "x"; } // Force getContextAt to terminate the statement, if needed
      return indent(state, textAfter, line, this.conf)
    };

    return TSMode;
  }(CodeMirror.GrammarMode));

  var meta = {
    electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
    blockCommentStart: "/*",
    blockCommentEnd: "*/",
    blockCommentContinue: " * ",
    lineComment: "//",
    fold: "brace",
    closeBrackets: "()[]{}''\"\"``"
  };
  for (var prop in meta) { TSMode.prototype[prop] = meta[prop]; }

  CodeMirror.registerHelper("wordChars", "google-typescript", /[\w$]/);

  CodeMirror.defineMode("google-typescript", function (conf, modeConf) { return new TSMode(conf, modeConf); });

})));
