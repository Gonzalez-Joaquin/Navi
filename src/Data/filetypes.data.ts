import { FileTypeDTO } from '../@Types'

import docIcon from '../Assets/Svg/Icon/doc-icon.svg'
import xlsIcon from '../Assets/Svg/Icon/xls-icon.svg'
import txtIcon from '../Assets/Svg/Icon/txt-icon.svg'
import pdfIcon from '../Assets/Svg/Icon/pdf-icon.svg'
import pptIcon from '../Assets/Svg/Icon/ppt-icon.svg'
import jpgIcon from '../Assets/Svg/Icon/jpg-icon.svg'
import pngIcon from '../Assets/Svg/Icon/png-icon.svg'
import tifIcon from '../Assets/Svg/Icon/tif-icon.svg'
import svgIcon from '../Assets/Svg/Icon/svg-icon.svg'
import gifIcon from '../Assets/Svg/Icon/gif-icon.svg'
import zipIcon from '../Assets/Svg/Icon/zip-icon.svg'
import mp3Icon from '../Assets/Svg/Icon/mp3-icon.svg'
import movIcon from '../Assets/Svg/Icon/mov-icon.svg'
import wmvIcon from '../Assets/Svg/Icon/wmv-icon.svg'
import mpgIcon from '../Assets/Svg/Icon/mpg-icon.svg'
import midiIcon from '../Assets/Svg/Icon/midi-icon.svg'
import aviIcon from '../Assets/Svg/Icon/avi-icon.svg'
import aacIcon from '../Assets/Svg/Icon/aac-icon.svg'
import flaIcon from '../Assets/Svg/Icon/fla-icon.svg'
import flvIcon from '../Assets/Svg/Icon/flv-icon.svg'
import psdIcon from '../Assets/Svg/Icon/psd-icon.svg'
import aiIcon from '../Assets/Svg/Icon/ai-icon.svg'
import epsIcon from '../Assets/Svg/Icon/eps-icon.svg'
import rawIcon from '../Assets/Svg/Icon/raw-icon.svg'
import bmpIcon from '../Assets/Svg/Icon/bmp-icon.svg'
import psIcon from '../Assets/Svg/Icon/ps-icon.svg'
import cadIcon from '../Assets/Svg/Icon/cad-icon.svg'
import dsIcon from '../Assets/Svg/Icon/3ds-icon.svg'
import sqlIcon from '../Assets/Svg/Icon/sql-icon.svg'
import xmlIcon from '../Assets/Svg/Icon/xml-icon.svg'
import htmlIcon from '../Assets/Svg/Icon/html-icon.svg'
import cssIcon from '../Assets/Svg/Icon/css-icon.svg'
import phpIcon from '../Assets/Svg/Icon/php-icon.svg'
import jsIcon from '../Assets/Svg/Icon/js-icon.svg'
import datIcon from '../Assets/Svg/Icon/dat-icon.svg'
import isoIcon from '../Assets/Svg/Icon/iso-icon.svg'
import dllIcon from '../Assets/Svg/Icon/dll-icon.svg'
import dmgIcon from '../Assets/Svg/Icon/dmg-icon.svg'
import cdrIcon from '../Assets/Svg/Icon/cdr-icon.svg'
import inddIcon from '../Assets/Svg/Icon/indd-icon.svg'

const FileTypeData: Array<FileTypeDTO> = [
  { id: 'd1a7e0aa-bc67-4709-9d1b-1d9a067c4035', type: 'DOC', icon: docIcon },
  { id: 'e7f32e08-a853-4b35-882d-f98379e01490', type: 'XLS', icon: xlsIcon },
  { id: '503d9f4b-0fbb-4e85-b274-4b1be14e8392', type: 'TXT', icon: txtIcon },
  { id: 'a01f614f-bc6d-478b-bf56-57b25d162f9d', type: 'PDF', icon: pdfIcon },
  { id: 'dc1e70c5-c6b7-4d3e-ae36-fb3026f1fae7', type: 'PPT', icon: pptIcon },
  { id: 'fdc8e11b-1986-4c4a-8b76-1d2e68291d4f', type: 'JPG', icon: jpgIcon },
  { id: '9b3d0c8c-03ed-4825-840d-b3707b06b512', type: 'PNG', icon: pngIcon },
  { id: 'aa21d67e-8c4d-4077-88e4-baf0bc899319', type: 'TIF', icon: tifIcon },
  { id: '3f7b9784-6a08-49cc-9477-dc9c163f0074', type: 'SVG', icon: svgIcon },
  { id: '4d0e8b15-305e-4a14-8c2b-947189679f2b', type: 'GIF', icon: gifIcon },
  { id: 'e9bb5bb7-f5d2-46a0-b21d-cae637efb752', type: 'ZIP', icon: zipIcon },
  { id: 'a42eb43e-83e5-48f2-9fc1-96b0514a84b9', type: 'MP3', icon: mp3Icon },
  { id: '72636a38-3c55-43b4-848f-0d1463ef3dd0', type: 'MOV', icon: movIcon },
  { id: '6017a24b-10b1-4d70-bac7-9ba6ba09e835', type: 'WMV', icon: wmvIcon },
  { id: 'f25b19ea-58d6-41a1-97ca-63c1694769e8', type: 'MPG', icon: mpgIcon },
  { id: 'e408f3cf-e8b2-44b2-bbee-4466aeb957fb', type: 'MIDI', icon: midiIcon },
  { id: '31b6e701-9608-49d5-b33c-eae9d72ab90f', type: 'AVI', icon: aviIcon },
  { id: 'ed2fd9f2-4c69-43b3-8100-bfb56e5659cb', type: 'AAC', icon: aacIcon },
  { id: '88a3f1a1-3d3b-4c96-998f-87a82f5e7852', type: 'FLA', icon: flaIcon },
  { id: '3e0b2186-36e7-4fb9-82e5-e83fd1cc0a5b', type: 'FLV', icon: flvIcon },
  { id: 'f6260f23-660e-44d0-a5d6-5f2f2789fddb', type: 'PSD', icon: psdIcon },
  { id: '498b8327-78c2-4e61-8eec-2320d5b631ad', type: 'AI', icon: aiIcon },
  { id: 'df6a7590-9fc3-42c1-b511-5d4efc823357', type: 'EPS', icon: epsIcon },
  { id: '315a70c5-0b58-46a9-bcb6-df1138c14b99', type: 'RAW', icon: rawIcon },
  { id: 'a8e3705f-1c9e-41e9-89cf-6d43f4bb2076', type: 'BMP', icon: bmpIcon },
  { id: '4a450cc3-2c0c-4f8e-931b-1581c95ac2b6', type: 'PS', icon: psIcon },
  { id: '5a5e1320-09b1-441e-a20d-fb878b4d1eb5', type: 'CAD', icon: cadIcon },
  { id: 'a9f4526e-07a6-4f39-917b-4abf84666bb5', type: '3DS', icon: dsIcon },
  { id: 'd4cbb36f-591d-41e5-9177-bc1b0a3d4b86', type: 'SQL', icon: sqlIcon },
  { id: '184e25c2-cde3-4c7e-8b45-63eeb2d7b2d6', type: 'XML', icon: xmlIcon },
  { id: '768bba3d-874b-48f7-90d3-1bc073e478f7', type: 'HTML', icon: htmlIcon },
  { id: '46d08d5b-401d-42e8-bd94-5a1c64fd1a91', type: 'CSS', icon: cssIcon },
  { id: '5b2ae208-e83b-49ef-a92f-cedfd239b8f7', type: 'PHP', icon: phpIcon },
  { id: 'ffbe316e-9820-474b-a97f-634c5377fba9', type: 'JS', icon: jsIcon },
  { id: '7338f7b2-e344-419f-a2e5-86b1fd2d5ad1', type: 'DAT', icon: datIcon },
  { id: '52f1db0f-cf88-49d7-a9d6-1cb568477ff7', type: 'ISO', icon: isoIcon },
  { id: 'dcbe55a1-9dc7-4e0c-8428-1edfc4c80acb', type: 'DLL', icon: dllIcon },
  { id: 'cfb94311-248d-43f2-b55a-c2e4b474d07d', type: 'DMG', icon: dmgIcon },
  { id: 'a4f7cbfa-70c9-45a4-9ac7-648027b7f5d4', type: 'CDR', icon: cdrIcon },
  { id: 'ab98ed9a-9e94-47bc-8df7-82db1cb51219', type: 'INDD', icon: inddIcon },
  
]

export default FileTypeData
