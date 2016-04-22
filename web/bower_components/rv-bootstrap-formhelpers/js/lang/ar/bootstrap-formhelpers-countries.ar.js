/* ==========================================================
 * bootstrap-formhelpers-countries.ar.js
 * https://github.com/vlamanna/BootstrapFormHelpers
 * ==========================================================
 * Copyright 2012 Vincent Lamanna
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

var BFHCountriesList = {
  'AZ' : 'أذربيجان',
  'TF' : 'أراض فرنسية جنوبية',
  'AM' : 'أرمينيا',
  'AW' : 'أروبا',
  'AU' : 'أستراليا',
  'AF' : 'أفغانستان',
  'AL' : 'ألبانيا',
  'DE' : 'ألمانيا',
  'AQ' : 'أنتاركتيكا',
  'AG' : 'أنتيغا وباربودا',
  'AI' : 'أنجويلا',
  'AD' : 'أندورا',
  'AO' : 'أنغولا',
  'UZ' : 'أوزبكستان',
  'UG' : 'أوغندا',
  'UA' : 'أوكرانيا',
  'IS' : 'أيسلندا',
  'ET' : 'إثيوبيا',
  'ER' : 'إرتريا',
  'ES' : 'إسبانيا',
  'EE' : 'إستونيا',
  'IL' : 'إسرائيل',
  'IO' : 'إقليم المحيط الهندي البريطاني',
  'ID' : 'إندونسيا',
  'IR' : 'إيران',
  'IT' : 'إيطاليا',
  'AR' : 'الأرجنتين',
  'JO' : 'الأردن',
  'UY' : 'الأوروغواي',
  'EC' : 'الإكوادور',
  'AE' : 'الإمارات',
  'PY' : 'الباراغواي',
  'BH' : 'البحرين',
  'BR' : 'البرازيل',
  'PT' : 'البرتغال',
  'BS' : 'البهاما',
  'BA' : 'البوسنة والهرسك',
  'PE' : 'البيرو',
  'CZ' : 'التشيك',
  'ME' : 'الجبل الأسود',
  'DZ' : 'الجزائر',
  'VG' : 'الجزر العذراء البريطانية',
  'EH' : 'الجمهورية العربية الصحراوية الديمقراطية',
  'DK' : 'الدانمارك',
  'CV' : 'الرأس الأخضر',
  'SA' : 'السعودية',
  'SV' : 'السلفادور',
  'SN' : 'السنغال',
  'SD' : 'السودان',
  'SE' : 'السويد',
  'SO' : 'الصومال',
  'CN' : 'الصين',
  'IQ' : 'العراق',
  'GA' : 'الغابون',
  'VA' : 'الفاتيكان',
  'PH' : 'الفلبين',
  'CM' : 'الكاميرون',
  'KW' : 'الكويت',
  'MV' : 'المالديف',
  'HU' : 'المجر',
  'MA' : 'المغرب',
  'MX' : 'المكسيك',
  'GB' : 'المملكة المتحدة',
  'NO' : 'النرويج',
  'AT' : 'النمسا',
  'NP' : 'النيبال',
  'NE' : 'النيجر',
  'IN' : 'الهند',
  'US' : 'الولايات المتحدة',
  'JP' : 'اليابان',
  'YE' : 'اليمن',
  'GR' : 'اليونان',
  'PG' : 'بابوا غينيا الجديدة',
  'BB' : 'باربادوس',
  'PK' : 'باكستان',
  'PW' : 'بالاو',
  'BN' : 'بروناي',
  'BE' : 'بلجيكا',
  'BG' : 'بلغاريا',
  'BZ' : 'بليز',
  'BD' : 'بنغلاديش',
  'PA' : 'بنما',
  'BJ' : 'بنين',
  'BT' : 'بوتان',
  'BW' : 'بوتسوانا',
  'PR' : 'بورتوريكو',
  'BF' : 'بوركينا فاسو',
  'MM' : 'بورما',
  'BI' : 'بوروندي',
  'PL' : 'بولندا',
  'BO' : 'بوليفيا',
  'PF' : 'بولينزيا الفرنسية',
  'TH' : 'تايلند',
  'TW' : 'تايوان',
  'TM' : 'تركمنستان',
  'TR' : 'تركيا',
  'TT' : 'ترينيداد وتوباغو',
  'TD' : 'تشاد',
  'CL' : 'تشيلي',
  'TZ' : 'تنزانيا',
  'TG' : 'توغو',
  'TV' : 'توفالو',
  'TK' : 'توكلو',
  'TO' : 'تونجا',
  'TN' : 'تونس',
  'TP' : 'تيمور الشرقية',
  'JM' : 'جاميكا',
  'GI' : 'جبل طارق',
  'GL' : 'جرينلاند',
  'AN' : 'جزر الأنتيل الهولندية',
  'VI' : 'جزر العذراء الأمريكية',
  'KM' : 'جزر القمر',
  'UM' : 'جزر الولايات المتحدة الهامشية',
  'BM' : 'جزر برمودا',
  'PN' : 'جزر بيتكيرن',
  'TC' : 'جزر توركس وكايكوس',
  'SB' : 'جزر سليمان',
  'FO' : 'جزر فارو',
  'FK' : 'جزر فوكلاند',
  'KY' : 'جزر كايمان',
  'CK' : 'جزر كوك',
  'CC' : 'جزر كوكس',
  'MH' : 'جزر مارشال',
  'MP' : 'جزر ماريانا الشمالية',
  'BV' : 'جزيرة بوفيه',
  'CX' : 'جزيرة عيد الميلاد',
  'HM' : 'جزيرة هيرد وجزر ماكدونالد',
  'CF' : 'جمهورية أفريقيا الوسطى',
  'IE' : 'جمهورية أيرلندا',
  'DO' : 'جمهورية الدومنيكان',
  'CD' : 'جمهورية الكونغو الديمقراطية',
  'RS' : 'جمهورية صربيا',
  'MK' : 'جمهورية مقدونيا',
  'ZA' : 'جنوب أفريقيا',
  'GP' : 'جوادلوب',
  'GE' : 'جورجيا',
  'GS' : 'جورجيا الجنوبية وجزر ساندويتش الجنوبية',
  'DJ' : 'جيبوتي',
  'DM' : 'دومينيكا',
  'RW' : 'رواندا',
  'RU' : 'روسيا',
  'BY' : 'روسيا البيضاء',
  'RO' : 'رومانيا',
  'RE' : 'ريونيون',
  'ZM' : 'زامبيا',
  'ZW' : 'زمبابوي',
  'CI' : 'ساحل العاج',
  'WS' : 'ساموا',
  'AS' : 'ساموا الأمريكية',
  'PM' : 'سان بيار وميكلون',
  'SM' : 'سان مارينو',
  'VC' : 'سانت فنسينت والجرينادينز',
  'KN' : 'سانت كيتس ونيفيس',
  'LC' : 'سانت لوسيا',
  'SH' : 'سانت هيلينا',
  'ST' : 'ساو تومي وبرينسيب',
  'LK' : 'سريلانكا',
  'SK' : 'سلوفاكيا',
  'SI' : 'سلوفينيا',
  'SG' : 'سنغافورا',
  'SZ' : 'سوازيلند',
  'SJ' : 'سوالبارد و یان ماین',
  'SY' : 'سوريا',
  'SR' : 'سورينام',
  'CH' : 'سويسرا',
  'SL' : 'سيراليون',
  'SC' : 'سيشيل',
  'TJ' : 'طاجيكستان',
  'OM' : 'عمان',
  'GM' : 'غامبيا',
  'GH' : 'غانا',
  'GD' : 'غرينادا',
  'GT' : 'غواتيمالا',
  'GU' : 'غوام',
  'GY' : 'غويانا',
  'GF' : 'غويانا الفرنسية',
  'GN' : 'غينيا',
  'GQ' : 'غينيا الاستوائية',
  'GW' : 'غينيا بيساو',
  'VU' : 'فانواتو',
  'FR' : 'فرنسا',
  'PS' : 'فلسطين',
  'VE' : 'فنزويلا',
  'FI' : 'فنلندا',
  'VN' : 'فيتنام',
  'FJ' : 'فيجي',
  'CY' : 'قبرص',
  'KG' : 'قرغيزستان',
  'QA' : 'قطر',
  'KZ' : 'كازاخستان',
  'NC' : 'كاليدونيا الجديدة',
  'HR' : 'كرواتيا',
  'KH' : 'كمبوديا',
  'CA' : 'كندا',
  'CU' : 'كوبا',
  'KR' : 'كوريا الجنوبية',
  'KP' : 'كوريا الشمالية',
  'CR' : 'كوستاريكا',
  'CO' : 'كولومبيا',
  'KI' : 'كيريباس',
  'KE' : 'كينيا',
  'LV' : 'لاتفيا',
  'LA' : 'لاوس',
  'LB' : 'لبنان',
  'LU' : 'لوكسمبورغ',
  'LY' : 'ليبيا',
  'LR' : 'ليبيريا',
  'LT' : 'ليتوانيا',
  'LI' : 'ليختنشتاين',
  'LS' : 'ليسوتو',
  'MQ' : 'مارتينيك',
  'MO' : 'ماكاو',
  'MT' : 'مالطا',
  'ML' : 'مالي',
  'MY' : 'ماليزيا',
  'YT' : 'مايوت',
  'MG' : 'مدغشقر',
  'EG' : 'مصر',
  'MW' : 'ملاوي',
  'MN' : 'منغوليا',
  'MR' : 'موريتانيا',
  'MU' : 'موريشيوس',
  'MZ' : 'موزمبيق',
  'MD' : 'مولدافيا',
  'MC' : 'موناكو',
  'MS' : 'مونتسرات',
  'NA' : 'ناميبيا',
  'NR' : 'ناورو',
  'NF' : 'نورفولك',
  'NG' : 'نيجيريا',
  'NI' : 'نيكاراجوا',
  'NZ' : 'نيوزيلندا',
  'NU' : 'نييوي',
  'HT' : 'هايتي',
  'HN' : 'هندوراس',
  'NL' : 'هولندا',
  'HK' : 'هونغ كونغ',
  'WF' : 'والس وفوتونا',
  'FM' : 'ولايات ميكرونيسيا المتحدة'
};
