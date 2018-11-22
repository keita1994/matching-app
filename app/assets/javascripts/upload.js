// "change"はフォーム要素が変更された時に発火する
$(document).on("change", "#file_photo", function(e) {
  // 変数"reader"を宣言。中身は入っていない。
  var reader;
// ファイルの有無の確認
  if (e.target.files.length) {
// newでFileReaderオブジェクトのインスタンスの作成
    reader = new FileReader;
// FileReader.onloadはファイル読み込みが成功した時に発生するイベント
    reader.onload = function(e) {
      var userThumbnail;
// imgファイルの要素を取得
      userThumbnail = document.getElementById('thumbnail');
// 取得した要素を表示できるように".is-activeクラス"を付与
      $("#userImgPreview").addClass("is-active");
      userThumbnail.setAttribute('src', e.target.result);
    };
    return reader.readAsDataURL(e.target.files[0]);
  }
});
