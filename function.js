
function custom_svg_script() {

    document.addEventListener('DOMContentLoaded', function () {
        const svgs = [
            '<svg width="50" height="50" viewBox="0 0 24 24"><path fill="#009A9A" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>', // Heart
            '<svg width="50" height="50" viewBox="0 0 512 512"><path fill="#009A9A" d="M350 99c-54 0-98-35-166-35-25 0-47 4-68 12a56 56 0 004-24C118 24 95 1 66 0a56 56 0 00-34 102v386c0 13 11 24 24 24h16c13 0 24-11 24-24v-94c28-12 64-23 114-23 54 0 98 35 166 35 48 0 86-16 122-41 9-6 14-15 14-26V96c0-23-24-39-45-29-35 16-77 32-117 32z"></path></svg>', // Flag
            '<svg width="50" height="50" viewBox="0 0 576 512"><path fill="#009A9A" d="M488 313v143c0 13-11 24-24 24H348c-7 0-12-5-12-12V356c0-7-5-12-12-12h-72c-7 0-12 5-12 12v112c0 7-5 12-12 12H112c-13 0-24-11-24-24V313c0-4 2-7 4-10l188-154c5-4 11-4 16 0l188 154c2 3 4 6 4 10zm84-61l-84-69V44c0-6-5-12-12-12h-56c-7 0-12 6-12 12v73l-89-74a48 48 0 00-61 0L4 252c-5 4-5 12-1 17l25 31c5 5 12 5 17 1l235-193c5-4 11-4 16 0l235 193c5 5 13 4 17-1l25-31c4-6 4-13-1-17z"></path></svg>', // House
            '<svg width="50" height="50" viewBox="0 0 100 100"><polygon points="50,15 61,35 85,35 66,50 73,72 50,60 27,72 34,50 15,35 39,35" fill="#009A9A" /></svg>', // Star
            '<svg width="50" height="50" viewBox="0 0 100 100"><path fill="#009A9A" d="M50 0 L100 100 L0 100 Z" /></svg>', // Triangle
            '<svg width="50" height="50" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="#009A9A" /></svg>', // Circle
            '<svg width="50" height="50" viewBox="0 0 576 512"><path fill="#009A9A" d="M488 313v143c0 13-11 24-24 24H348c-7 0-12-5-12-12V356c0-7-5-12-12-12h-72c-7 0-12 5-12 12v112c0 7-5 12-12 12H112c-13 0-24-11-24-24V313c0-4 2-7 4-10l188-154c5-4 11-4 16 0l188 154c2 3 4 6 4 10zm84-61l-84-69V44c0-6-5-12-12-12h-56c-7 0-12 6-12 12v73l-89-74a48 48 0 00-61 0L4 252c-5 4-5 12-1 17l25 31c5 5 12 5 17 1l235-193c5-4 11-4 16 0l235 193c5 5 13 4 17-1l25-31c4-6 4-13-1-17z"></path></svg>' // Car
        ];
        
        const svgNames = [
            'Heart', 'Flag', 'House', 'Star', 'Triangle', 'Circle', 'Car'
        ];
        
        
             let correctSvgIndex;
            let selectedSvgIndex = null;
            
        //non footer svg
            
                
            const instructionElementContact = document.getElementById('svg-instruction-contact') ?? null;
        if (instructionElementContact) {
            function shuffleSvgsContact() {
                document.querySelectorAll('.random-svg').forEach(svg => svg.classList.remove('active-svg'));
               const shuffledSvgs = [...new Set([...svgs].sort(() => 0.5 - Math.random()))].slice(0, 3);
                const correctSvgIndex = Math.floor(Math.random() * 3);
        
                document.getElementById('svg_contact1').innerHTML = shuffledSvgs[0];
                document.getElementById('svg_contact1').setAttribute('data-index', svgs.indexOf(shuffledSvgs[0]));
        
                document.getElementById('svg_contact2').innerHTML = shuffledSvgs[1];
                document.getElementById('svg_contact2').setAttribute('data-index', svgs.indexOf(shuffledSvgs[1]));
        
                document.getElementById('svg_contact3').innerHTML = shuffledSvgs[2];
                document.getElementById('svg_contact3').setAttribute('data-index', svgs.indexOf(shuffledSvgs[2]));
        
                document.getElementById('correct-svg-contact').value = svgNames[svgs.indexOf(shuffledSvgs[correctSvgIndex])];
                instructionElementContact.innerHTML = `Please select the <span class="highlight">${svgNames[svgs.indexOf(shuffledSvgs[correctSvgIndex])]}</span>`;
        
        
            }
            shuffleSvgsContact(); 
                document.querySelectorAll('.random-svg').forEach((svgElement) => {
                svgElement.addEventListener('click', function () {
                    document.querySelectorAll('.random-svg').forEach(s => s.classList.remove('active-svg'));
                    this.classList.add('active-svg');
                    const svgIndex = svgElement.getAttribute('data-index');
                    if (svgIndex !== null) {
                        const selectedSvg = svgNames[svgIndex];
                        document.getElementById('clicked-svg-contact').value = selectedSvg;
                    }
                });
            });
             document.querySelectorAll('.random-svg-contact').forEach((svgElement) => {
                svgElement.addEventListener('click', function () {
                    document.querySelectorAll('.random-svg-contact').forEach(s => s.classList.remove('active-svg'));
                    this.classList.add('active-svg');
                    const svgIndex = svgElement.getAttribute('data-index');
                    if (svgIndex !== null) {
                        const selectedSvg = svgNames[svgIndex];
                        document.getElementById('clicked-svg-contact').value = selectedSvg;
                    }
                });
            });
        
        
             const btnSubscribe = document.getElementById('footer-submit-btn-contact');
             const form = document.querySelector('.wpcf7-form');
            btnSubscribe.addEventListener('click', function (event) {
                const correctSvg = document.getElementById('correct-svg-contact').value;
                const clickedSvg = document.getElementById('clicked-svg-contact').value;
        
                if (correctSvg !== clickedSvg) {
            const requiredFields = form.querySelectorAll('[aria-required="true"]');
            let allFieldsValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value) {
                    allFieldsValid = false;
                    field.classList.add('error');
                    console.log('Error input');
                } else {
                    field.classList.remove('error');
                }
            });
        
            if (!allFieldsValid) {
                document.getElementById('cf7-response-contact').textContent = 'You selected the wrong figure. Please try again.';
                shuffleSvgsContact();
                return;
            }
                    
                    document.querySelectorAll('.wpcf7-not-valid-tip').forEach(span => span.remove());
                    event.preventDefault(); 
                    document.getElementById('cf7-response-contact').textContent = 'You selected the wrong figure. Please try again.';
                    shuffleSvgsContact();  
                }
                else {
                    document.getElementById('cf7-response-contact').textContent = '';  
                }
            });
        }
    })
}