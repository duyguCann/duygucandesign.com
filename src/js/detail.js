import * as bootstrap from '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import colorTriMainImage from '../../assets/colorTri.png';
import onTrackMainImage from '../../assets/onTrack.png';
import smartSMainImage from '../../assets/smarts.png';
import spinChoiceMainImage from '../../assets/spinChoice.png';



// Proje ID'lerine karşılık gelen başlıkların saklandığı bir obje
const projectTitles = {
    'onTrackDetail': 'onTrack',
    'colorTriDetail': 'colorTri',
    'spinChoiceDetail': 'spinChoice',
    'SmartSDetail': 'SmartS',
    // Diğer projelerinizi buraya ekleyebilirsiniz
};
const projectImages = {
    'onTrackDetail': onTrackMainImage,
    'colorTriDetail': colorTriMainImage,
    'spinChoiceDetail': spinChoiceMainImage,
    'SmartSDetail': smartSMainImage,
    // Diğer projelerinizi buraya ekleyebilirsiniz
};
const firstInfoImages = {
    'onTrackDetail': onTrackMainImage,
    'colorTriDetail': colorTriMainImage,
    'spinChoiceDetail': spinChoiceMainImage,
    'SmartSDetail': smartSMainImage,
    // Diğer projelerinizi buraya ekleyebilirsiniz
};
const secondInfoImages = {
    'onTrackDetail': onTrackMainImage,
    'colorTriDetail': colorTriMainImage,
    'spinChoiceDetail': spinChoiceMainImage,
    'SmartSDetail': smartSMainImage,
    // Diğer projelerinizi buraya ekleyebilirsiniz
};
const firstInfoTexts = {
    'onTrackDetail': 'An electronic device which makes people’s lives more productive and balanced.',
    'colorTriDetail': 'A toy that aims to teach the color terminology to visually impaired kids.',
    'spinChoiceDetail': `A fun way of making choices, SpinChoice turns decision-making into a game that's as enjoyable as it is practical.`,
    'SmartSDetail': 'A phone application that reduces the complexity in banking transactions.',
    // Diğer projelerinizi buraya ekleyebilirsiniz
};

const secondInfoTexts = {
    'onTrackDetail': 'An electronic device which makes people’s lives more productive and balanced.',
    'colorTriDetail': 'A toy that aims to teach the color terminology to visually impaired kids.',
    'spinChoiceDetail': `A fun way of making choices, SpinChoice turns decision-making into a game that's as enjoyable as it is practical.`,
    'SmartSDetail': 'A phone application that reduces the complexity in banking transactions.',
    // Diğer projelerinizi buraya ekleyebilirsiniz
};
// URL'den sorgu dizesini al
const queryString = window.location.search;

// URLSearchParams nesnesi ile sorgu dizesini ayrıştır
const urlParams = new URLSearchParams(queryString);

// 'project' parametresinin değerini al
const projectId = urlParams.get('project');

//ChangeTitle
const projectTitle = projectTitles[projectId] || 'Proje Bulunamadı';

document.getElementById('projectDetailTitle').textContent = projectTitle;

//Change MainImage
const projectImageSrc = projectImages[projectId] || '../assets/default.png'; // Varsayılan resim yolu
document.getElementById('mainImage').src = projectImageSrc;

//Change FirstInfoImage
const firstInfoSrc = firstInfoImages[projectId] || '../assets/default.png'

document.getElementById('firstInfoImage').src = firstInfoSrc;

//Change SecondInfoImage
const secondInfoSrc = secondInfoImages[projectId] || '../assets/default.png'
document.getElementById('secondInfoImage').src = secondInfoSrc;

//Change firstInfoText
const firstInfoText = firstInfoTexts[projectId] || 'Proje Bulunamadı';
document.getElementById('firstInfoText').textContent = firstInfoText;

//Change secondInfoText
const secondInfoText = secondInfoTexts[projectId] || 'Proje Bulunamadı';
document.getElementById('secondInfoText').textContent = secondInfoText;