export function initFileUpload(dropAreaId = 'file-drop-area') {
  const $dropArea = $('#' + dropAreaId);
  const $fileInput = $dropArea.find('input[type="file"]');

  $dropArea.on('dragenter dragover', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $dropArea.addClass('dragover');
  });

  $dropArea.on('dragleave drop', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $dropArea.removeClass('dragover');
  });

  $dropArea.on('drop', function (e) {
    const files = e.originalEvent.dataTransfer.files;
    handleFiles(files);
  });

  $fileInput.on('change', function (e) {
    const files = e.target.files;
    handleFiles(files);
  });

  function handleFiles(files) {
    console.log('Выбранные файлы:', files);
  }
}
