var ChXlsx={
    xlsxName: function(h)
    {
        var xhr =new XMLHttpRequest();
        xhr.open("GET",h,true);
        xhr.responseType="arraybuffer"
        xhr.onload=new Uint8Array(xhr.response);
        var workbook = XLSX.read(data, { type: "array" });
        var firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        var data = XLSX.utils.sheet_to_json(firstSheet);
        return data;
    }
}
