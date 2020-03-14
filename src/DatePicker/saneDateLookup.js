//lookup for matching accepted date formats for DatePicker component
const saneDateLookup = {
    'MM/DD/YYYY': ['MM/DD/YYYY', 'M/DD/YYYY', 'M/D/YYYY', 'MM/D/YYYY', 'MM.DD.YYYY', 'M.DD.YYYY', 'M.D.YYYY', 'MM.D.YYYY', 'MM-DD-YYYY', 'M-DD-YYYY', 'M-D-YYYY', 'MM-D-YYYY'],
    'MM-DD-YYYY': ['MM-DD-YYYY', 'M/DD/YYYY', 'M/D/YYYY', 'MM/D/YYYY', 'MM.DD.YYYY', 'M.DD.YYYY', 'M.D.YYYY', 'MM.D.YYYY', 'MM-DD-YYYY', 'M-DD-YYYY', 'M-D-YYYY', 'MM-D-YYYY'],
    'MM.DD.YYYY': ['MM.DD.YYYY', 'M/DD/YYYY', 'M/D/YYYY', 'MM/D/YYYY', 'MM.DD.YYYY', 'M.DD.YYYY', 'M.D.YYYY', 'MM.D.YYYY', 'MM-DD-YYYY', 'M-DD-YYYY', 'M-D-YYYY', 'MM-D-YYYY'],
    'DD/MM/YYYY': ['DD/MM/YYYY', 'D/MM/YYYY', 'D/M/YYYY', 'DD/M/YYYY', 'DD.MM.YYYY', 'D.MM.YYYY', 'D.M.YYYY', 'DD.M.YYYY', 'DD-MM-YYYY', 'D-MM-YYYY', 'D-M-YYYY', 'DD-M-YYYY'],
    'DD-MM-YYYY': ['DD-MM-YYYY', 'D/MM/YYYY', 'D/M/YYYY', 'DD/M/YYYY', 'DD.MM.YYYY', 'D.MM.YYYY', 'D.M.YYYY', 'DD.M.YYYY', 'DD-MM-YYYY', 'D-MM-YYYY', 'D-M-YYYY', 'DD-M-YYYY'],
    'DD.MM.YYYY': ['DD.MM.YYYY', 'D/MM/YYYY', 'D/M/YYYY', 'DD/M/YYYY', 'DD.MM.YYYY', 'D.MM.YYYY', 'D.M.YYYY', 'DD.M.YYYY', 'DD-MM-YYYY', 'D-MM-YYYY', 'D-M-YYYY', 'DD-M-YYYY'],
    'YYYY/MM/DD': ['YYYY/MM/DD', 'YYYY/MM/D', 'YYYY/M/DD', 'YYYY/M/D', 'YYYY.MM.DD', 'YYYY.MM.D', 'YYYY.M.DD', 'YYYY.M.D', 'YYYY-MM-DD', 'YYYY-MM-D', 'YYYY-M-DD', 'YYYY-M-D'],
    'YYYY-MM-DD': ['YYYY-MM-DD', 'YYYY/MM/D', 'YYYY/M/DD', 'YYYY/M/D', 'YYYY.MM.DD', 'YYYY.MM.D', 'YYYY.M.DD', 'YYYY.M.D', 'YYYY/MM/DD', 'YYYY-MM-D', 'YYYY-M-DD', 'YYYY-M-D'],
    'YYYY.MM.DD': ['YYYY.MM.DD', 'YYYY/MM/D', 'YYYY/M/DD', 'YYYY/M/D', 'YYYY/MM/DD', 'YYYY.MM.D', 'YYYY.M.DD', 'YYYY.M.D', 'YYYY-MM-DD', 'YYYY-MM-D', 'YYYY-M-DD', 'YYYY-M-D']
};

export { saneDateLookup };
