//lookup for matching accepted date formats for DatePicker component
const saneDateLookup = {
    'MM/DD/YYYY': ['MM/DD/YYYY', 'M/DD/YYYY', 'M/D/YYYY', 'MM/D/YYYY', 'MM.DD.YYYY', 'M.DD.YYYY', 'M.D.YYYY', 'MM.D.YYYY', 'MM-DD-YYYY', 'M-DD-YYYY', 'M-D-YYYY', 'MM-D-YYYY', 'MM/DD/YY', 'M/DD/YY', 'M/D/YY', 'MM/D/YY', 'MM.DD.YY', 'M.DD.YY', 'M.D.YY', 'MM.D.YY', 'MM-DD-YY', 'M-DD-YY', 'M-D-YY', 'MM-D-YY'],
    'MM-DD-YYYY': ['MM-DD-YYYY', 'M/DD/YYYY', 'M/D/YYYY', 'MM/D/YYYY', 'MM.DD.YYYY', 'M.DD.YYYY', 'M.D.YYYY', 'MM.D.YYYY', 'MM-DD-YYYY', 'M-DD-YYYY', 'M-D-YYYY', 'MM-D-YYYY', 'MM-DD-YY', 'M/DD/YY', 'M/D/YY', 'MM/D/YY', 'MM.DD.YY', 'M.DD.YY', 'M.D.YY', 'MM.D.YY', 'MM-DD-YY', 'M-DD-YY', 'M-D-YY', 'MM-D-YY'],
    'MM.DD.YYYY': ['MM.DD.YYYY', 'M/DD/YYYY', 'M/D/YYYY', 'MM/D/YYYY', 'MM.DD.YYYY', 'M.DD.YYYY', 'M.D.YYYY', 'MM.D.YYYY', 'MM-DD-YYYY', 'M-DD-YYYY', 'M-D-YYYY', 'MM-D-YYYY', 'MM.DD.YY', 'M/DD/YY', 'M/D/YY', 'MM/D/YY', 'MM.DD.YY', 'M.DD.YY', 'M.D.YY', 'MM.D.YY', 'MM-DD-YY', 'M-DD-YY', 'M-D-YY', 'MM-D-YY'],
    'DD/MM/YYYY': ['DD/MM/YYYY', 'D/MM/YYYY', 'D/M/YYYY', 'DD/M/YYYY', 'DD.MM.YYYY', 'D.MM.YYYY', 'D.M.YYYY', 'DD.M.YYYY', 'DD-MM-YYYY', 'D-MM-YYYY', 'D-M-YYYY', 'DD-M-YYYY', 'DD/MM/YY', 'D/MM/YY', 'D/M/YY', 'DD/M/YY', 'DD.MM.YY', 'D.MM.YY', 'D.M.YY', 'DD.M.YY', 'DD-MM-YY', 'D-MM-YY', 'D-M-YY', 'DD-M-YY'],
    'DD-MM-YYYY': ['DD-MM-YYYY', 'D/MM/YYYY', 'D/M/YYYY', 'DD/M/YYYY', 'DD.MM.YYYY', 'D.MM.YYYY', 'D.M.YYYY', 'DD.M.YYYY', 'DD-MM-YYYY', 'D-MM-YYYY', 'D-M-YYYY', 'DD-M-YYYY', 'DD-MM-YY', 'D/MM/YY', 'D/M/YY', 'DD/M/YY', 'DD.MM.YY', 'D.MM.YY', 'D.M.YY', 'DD.M.YY', 'DD-MM-YY', 'D-MM-YY', 'D-M-YY', 'DD-M-YY'],
    'DD.MM.YYYY': ['DD.MM.YYYY', 'D/MM/YYYY', 'D/M/YYYY', 'DD/M/YYYY', 'DD.MM.YYYY', 'D.MM.YYYY', 'D.M.YYYY', 'DD.M.YYYY', 'DD-MM-YYYY', 'D-MM-YYYY', 'D-M-YYYY', 'DD-M-YYYY', 'DD.MM.YY', 'D/MM/YY', 'D/M/YY', 'DD/M/YY', 'DD.MM.YY', 'D.MM.YY', 'D.M.YY', 'DD.M.YY', 'DD-MM-YY', 'D-MM-YY', 'D-M-YY', 'DD-M-YY'],
    'YYYY/MM/DD': ['YYYY/MM/DD', 'YYYY/MM/D', 'YYYY/M/DD', 'YYYY/M/D', 'YYYY.MM.DD', 'YYYY.MM.D', 'YYYY.M.DD', 'YYYY.M.D', 'YYYY-MM-DD', 'YYYY-MM-D', 'YYYY-M-DD', 'YYYY-M-D', 'YY/MM/DD', 'YY/MM/D', 'YY/M/DD', 'YY/M/D', 'YY.MM.DD', 'YY.MM.D', 'YY.M.DD', 'YY.M.D', 'YY-MM-DD', 'YY-MM-D', 'YY-M-DD', 'YY-M-D'],
    'YYYY-MM-DD': ['YYYY-MM-DD', 'YYYY/MM/D', 'YYYY/M/DD', 'YYYY/M/D', 'YYYY.MM.DD', 'YYYY.MM.D', 'YYYY.M.DD', 'YYYY.M.D', 'YYYY/MM/DD', 'YYYY-MM-D', 'YYYY-M-DD', 'YYYY-M-D', 'YY-MM-DD', 'YY/MM/D', 'YY/M/DD', 'YY/M/D', 'YY.MM.DD', 'YY.MM.D', 'YY.M.DD', 'YY.M.D', 'YY/MM/DD', 'YY-MM-D', 'YY-M-DD', 'YY-M-D'],
    'YYYY.MM.DD': ['YYYY.MM.DD', 'YYYY/MM/D', 'YYYY/M/DD', 'YYYY/M/D', 'YYYY/MM/DD', 'YYYY.MM.D', 'YYYY.M.DD', 'YYYY.M.D', 'YYYY-MM-DD', 'YYYY-MM-D', 'YYYY-M-DD', 'YYYY-M-D', 'YY.MM.DD', 'YY/MM/D', 'YY/M/DD', 'YY/M/D', 'YY/MM/DD', 'YY.MM.D', 'YY.M.DD', 'YY.M.D', 'YY-MM-DD', 'YY-MM-D', 'YY-M-DD', 'YY-M-D']
};

export { saneDateLookup };
