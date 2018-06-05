import { injectGlobal } from 'styled-components';
import evenfall from '../assets/Evenfall-Upright.otf';

injectGlobal`
  @font-face { 
    font-family: Evenfall; 
    src: url('${evenfall}') format('opentype'); 
}`;
