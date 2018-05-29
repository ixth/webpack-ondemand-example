import letsTryToImportFileAPI from 'fileapi';

console.log(letsTryToImportFileAPI);

import('fileapi').then((fileapi) => {
    console.log(fileapi);
});
