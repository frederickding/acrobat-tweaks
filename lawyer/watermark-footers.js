/* Watermark Footers Before Printing */
function WatermarkFootersPrint() {
    var d = new Date();
    var timestamp = util.printd("yyyy-mm-dd HH:MM:ss", d);
    this.addWatermarkFromText({
        cText: timestamp, 
        nTextAlign: app.constants.align.right,
        nHorizAlign: app.constants.align.right,
        nVertAlign: app.constants.align.bottom,
        nHorizValue: -18,
        nVertValue: 16,
        nFontSize: 8,
    });

    var clientMatter = app.response({
        cQuestion: "Input a client-matter number or other designation for the bottom-left corner (e.g. 12345-1234)?",
        cTitle: "Bottom-Left Footer"
    });
    if (clientMatter !== null) {
        this.addWatermarkFromText({
            cText: clientMatter.trim(), 
            nTextAlign: app.constants.align.left,
            nHorizAlign: app.constants.align.left,
            nVertAlign: app.constants.align.bottom,
            nHorizValue: 18,
            nVertValue: 16,
            nFontSize: 8,
        });
    }

    this.print();
}
WatermarkFootersPrint();