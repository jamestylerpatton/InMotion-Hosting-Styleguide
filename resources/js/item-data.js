module.exports = (function() {
  itemData = {
    // font and text
    h1_item : {
      name : 'H1 Page Header',
      props : {
        'Tag' : 'h1',
        'Color' : 'white',
        'Font' : 'Adelle',
        'Font Size' : '33px',
        'Margin Bottom' : '15px',
        'Font Weight' : 'Bold (600)'
      }
    },
    h1_item_2 : {
      name : 'H1 Page Header',
      props : {
        'Tag' : 'h1',
        'Color' : 'black',
        'Font' : 'Adelle',
        'Font Size' : '33px',
        'Font Weight' : 'Bold (600)'
      }
    },
    header_p_item: {
      name : 'Header Paragraph',
      props : {
        'Tag' : 'p',
        'Font' : 'Adelle Sans',
        'Font Size' : '13px'
      }
    },
    h2_item_1: {
      name : 'Section Header H2',
      props : {
        'Tag/Classes' : 'h2.black',
        'color' : 'black',
        'Font' : 'Adelle',
        'Font Size' : '24px',
        'Font Weight' : 'normal (400)'
      }
    },
    h2_item_2: {
      name : 'Section Header H2',
      props : {
        'color' : 'grey',
        'Font' : 'Adelle',
        'Font Size' : '24px',
        'Font Weight' : 'normal (400)'
      }
    },
    h3_item: {
      name : 'H3 Header',
      props : {
        'Tag' : 'h3',
        'color' : 'black',
        'Font' : 'Adelle Sans',
        'Font Size' : '24px',
        'Font Weight' : 'normal (400)'
      }
    },
    h4_item: {
      name : 'Section Header H2',
      props : {
        'Tag' : 'h4',
        'color' : 'red',
        'Font' : 'Adelle Sans',
        'Font Size' : '17px',
        'Font Weight' : 'normal (400)'
      }
    },
    p_item: {
      name : 'Paragraph',
      props : {
        'Tag' : 'p',
        'Font' : 'Adelle Sans',
        'Font Size' : '13px',
        'Font Weight' : 'normal (400)'
      }
    },
    strong_item: {
      name : 'Bold',
      props : {
        'Tag' : 'strong',
        'Font' : 'Adelle Sans',
        'Font Weight' : 'black (900)'
      }
    },
    link_item: {
      name : 'Link',
      props : {
        'Tag' : 'a',
        'Font' : 'Adelle Sans',
        'Color' : 'Link Blue'
      }
    },
    em_item: {
      name : 'Emphasized/Italicized',
      props : {
        'Tag' : 'em',
        'Font' : 'Adelle Sans',
        'Font Style' : 'Italics'
      }
    },
    muted_item: {
      name : 'Muted',
      props : {
        'Class' : '.muted',
        'Font' : 'Adelle Sans',
        'Color' : 'Grey'
      }
    },
    //buttons
    button_primary_1: {
      name : 'Primary Button',
      props : {
        'Class' : '.btn.btn-primary',
        'Background' : 'Link Blue',
        'Color' : 'White'
      }
    },
    button_primary_2: {
      name : 'Primary Button Large',
      props : {
        'Class' : '.btn.btn-primary.btn-large',
        'Background' : 'Link Blue',
        'Color' : 'White'
      }
    },
    button_primary_3: {
      name : 'Primary Button Mini',
      props : {
        'Class' : '.btn.btn-primary.btn-mini',
        'Background' : 'Link Blue',
        'Color' : 'White'
      }
    },
    button_white_1: {
      name : 'White Button',
      props : {
        'Class' : '.btn.btn-white',
        'Background' : 'White',
        'Color' : 'Midnight Blue'
      }
    },
    button_white_2: {
      name : 'White Button Large',
      props : {
        'Class' : '.btn.btn-white.btn-large',
        'Background' : 'White',
        'Color' : 'Midnight Blue'
      }
    },
    button_white_3: {
      name : 'White Button Mini',
      props : {
        'Class' : '.btn.btn-white.btn-mini',
        'Background' : 'White',
        'Color' : 'Midnight Blue'
      }
    },
    button_white_4: {
      name : 'White Button 2',
      props : {
        'Class' : '.btn.btn-white-blue',
        'Background' : 'White',
        'Color' : 'Link Blue'
      }
    },
    button_white_5: {
      name : 'White Button 2 Large',
      props : {
        'Class' : '.btn.btn-white-blue.btn-large',
        'Background' : 'White',
        'Color' : 'Link Blue'
      }
    },
    button_white_6: {
      name : 'White Button 2 Mini',
      props : {
        'Class' : '.btn.btn-white-blue.btn-mini',
        'Background' : 'White',
        'Color' : 'Link Blue'
      }
    },
    button_red_1: {
      name : 'Red Button',
      props : {
        'Class' : '.btn.btn-red',
        'Background' : 'Red',
        'Color' : 'White'
      }
    },
    button_red_2: {
      name : 'Red Button Large',
      props : {
        'Class' : '.btn.btn-red.btn-large',
        'Background' : 'Red',
        'Color' : 'White'
      }
    },
    button_red_3: {
      name : 'Red Button Mini',
      props : {
        'Class' : '.btn.btn-red.btn-mini',
        'Background' : 'Red',
        'Color' : 'White'
      }
    },
    //icons
    business_icon: {
      name : 'Business Icon'
    },
    vps_icon: {
      name : 'VPS Icon'
    },
    reseller_icon: {
      name : 'Reseller Icon'
    },
    dedicated_icon: {
      name : 'Dedicated Icon'
    },
    enterprise_icon: {
      name : 'Enterprise Icon'
    },
    legacy_icon: {
      name : 'Legacy Icon',
      props : {
        'Note' : 'This icon has not been used on live site yet, and is subject to change'
      }
    },
    // colors
    grey_1: {
      name : 'White',
      props : {
        'Hex' : '#FFFFFF',
        'RGB' : '255, 255, 255',
        'CMYK' : '0, 0, 0, 0'
      }
    },
    grey_2: {
      name : 'Light Grey',
      props : {
        'Hex' : '#F5F5F5',
        'RGB' : '245, 245, 245',
        'CMYK' : '0, 0, 0, 4'
      }
    },
    grey_3: {
      name : 'Mid-Light Grey',
      props : {
        'Hex' : '#EEEEEE',
        'RGB' : '238, 238, 238',
        'CMYK' : '0, 0, 0, 7'
      }
    },
    grey_4: {
      name : 'Light Border Grey',
      props : {
        'Hex' : '#E1E1E1',
        'RGB' : '225, 225, 225',
        'CMYK' : '0, 0, 0, 12'
      }
    },
    grey_5: {
      name : 'Mid Grey',
      props : {
        'Hex' : '#CCCCCC',
        'RGB' : '204, 204, 204',
        'CMYK' : '0, 0, 0, 20'
      }
    },
    grey_6: {
      name : 'Border Grey',
      props : {
        'Hex' : '#B2B2B2',
        'RGB' : '178, 178, 178',
        'CMYK' : '0, 0, 0, 30'
      }
    },
    grey_7: {
      name : 'Grey',
      props : {
        'Hex' : '#888888',
        'RGB' : '136, 136, 136',
        'CMYK' : '0, 0, 0, 47'
      }
    },
    grey_8: {
      name : 'Dark Grey',
      props : {
        'Hex' : '#333333',
        'RGB' : '51, 51, 51',
        'CMYK' : '0, 0, 0, 80'
      }
    },
    grey_9: {
      name : 'Black',
      props : {
        'Hex' : '#232323',
        'RGB' : '35, 35, 35',
        'CMYK' : '0, 0, 0, 86'
      }
    },
    blue_1: {
      name : 'Light Blue',
      props : {
        'Hex' : '#98C6E4',
        'RGB' : '152, 198, 228',
        'CMYK' : '33, 13, 0, 11'
      }
    },
    blue_2: {
      name : 'Link Blue',
      props : {
        'Hex' : '#4BA0E1',
        'RGB' : '75, 160, 225',
        'CMYK' : '67, 29, 0, 12'
      }
    },
    blue_3: {
      name : 'Blue',
      props : {
        'Hex' : '#418FBF',
        'RGB' : '65, 143, 191',
        'CMYK' : '66, 25, 0, 25'
      }
    },
    blue_4: {
      name : 'Banner Blue',
      props : {
        'Hex' : '#327fb9',
        'RGB' : '50, 127, 185',
        'CMYK' : '73, 31, 0, 27'
      }
    },
    blue_5: {
      name : 'Dark Blue',
      props : {
        'Hex' : '#125075',
        'RGB' : '18, 80, 117',
        'CMYK' : '85, 32, 0, 54'
      }
    },
    blue_6: {
      name : 'Midnight Blue',
      props : {
        'Hex' : '#083048',
        'RGB' : '8, 48, 72',
        'CMYK' : '89, 33, 0, 72'
      }
    },
    blue_7: {
      name : 'Black Blue',
      props : {
        'Hex' : '#031F36',
        'RGB' : '3, 31, 54',
        'CMYK' : '94, 43, 0, 79'
      }
    },
    green_1: {
      name : 'Light Green',
      props : {
        'Hex' : '#8DCB8C',
        'RGB' : '141, 203, 140',
        'CMYK' : '31, 0, 31, 20'
      }
    },
    green_2: {
      name : 'Mid Green',
      props : {
        'Hex' : '#6FC06F',
        'RGB' : '111, 192, 111',
        'CMYK' : '42, 0, 42, 25'
      }
    },
    green_3: {
      name : 'Green',
      props : {
        'Hex' : '#55AB55',
        'RGB' : '85, 171, 85',
        'CMYK' : '50, 0, 50, 33'
      }
    },
    green_4: {
      name : 'Dark Green',
      props : {
        'Hex' : '#448245',
        'RGB' : '68, 130, 69',
        'CMYK' : '48, 0, 47, 49'
      }
    },
    green_5: {
      name : 'Yellowish Green',
      props : {
        'Hex' : '#8EB73E',
        'RGB' : '142, 183, 62',
        'CMYK' : '22, 0, 66, 28'
      }
    },
    red_1: {
      name : 'Light Red',
      props : {
        'Hex' : '#EC4550',
        'RGB' : '236, 69, 80',
        'CMYK' : '0, 71, 66, 7'
      }
    },
    red_2: {
      name : 'Mid Red',
      props : {
        'Hex' : '#E72837',
        'RGB' : '231, 40, 55',
        'CMYK' : '0, 83, 76, 9'
      }
    },
    red_3: {
      name : 'Red',
      props : {
        'Hex' : '#C52228',
        'RGB' : '197, 34, 40',
        'CMYK' : '0, 83, 80, 23'
      }
    },
    yellow_1: {
      name : 'Light Yellow',
      props : {
        'Hex' : '#FDC56E',
        'RGB' : '253, 197, 110',
        'CMYK' : '0, 22, 57, 1'
      }
    },
    yellow_2: {
      name : 'Yellow',
      props : {
        'Hex' : '#FBB242',
        'RGB' : '251, 178, 66',
        'CMYK' : '0, 29, 74, 2'
      }
    },
    yellow_3: {
      name : 'Dark Yellow',
      props : {
        'Hex' : '#EEA440',
        'RGB' : '238, 164, 64',
        'CMYK' : '0, 31, 73, 7'
      }
    }
  }
})();