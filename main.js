'use strict';
const arrGroups = 
 [
    'FE2021-5',
    
    'Fe2020-2',
 
    'FD2021',
    
    'fD2022-1',
    
    'FE2020-3',
    
    'FD2020/2',
    
    'fe2021-3',
    
    'FD2020$5',
    
    'FE2008-52',
   
    'Fm2008-23',

    'FM2022-1',

    ];
    const reg = /^(F[DME]|f[dme])20\d\d(?<end>-\d+)?$/d;
    for (let i = 0; i < arrGroups.length; i++) {
        console.log(reg.test(arrGroups[i])? arrGroups[i]+`-Success` :arrGroups[i]+`-Error` );
        
    }
    