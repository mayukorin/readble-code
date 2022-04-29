var start_ms = (new Date()).getTime();

var elapsed_ms = (new Date()).getTime() - start_ms;
document.writeln("読み込み時間：" + elapsed_ms / 1000 + " 秒");