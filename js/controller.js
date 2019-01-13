


/**
* Initializes UI view of web page
*/

(function($){
    let arena = undefined;
    let carSvg = [`
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" 
    width="100px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
    <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
    <g class = "car"><path fill ="`,
    `color`,
    ` 
    " d="M685,666.4c0,50.3,40.8,91.1,91.1,91.1s91.1-40.8,91.1-91.1c0-50.3-40.8-91.1-91.1-91.1C725.7,
    575.3,685,616.1,685,666.4z M714.7,666.4c0-33.9,27.5-61.3,61.3-61.3s61.3,27.5,61.3,61.3s-27.5,61.3-61.3,
    61.3C742.2,727.7,714.7,700.3,714.7,666.4z M91.4,666.4c0,50.3,40.8,91.1,91.1,91.1c50.3,0,91.1-40.8,
    91.1-91.1c0-50.3-40.8-91.1-91.1-91.1C132.2,575.3,91.4,616.1,91.4,666.4z M121.2,
    666.4c0-33.9,27.5-61.3,61.3-61.3c33.9,0,61.3,27.5,61.3,61.3s-27.5,61.3-61.3,61.3C148.6,727.7,121.2,700.3,121.2,
    666.4z M11.7,501.4c-2.5,36.1-1.6,85.5-1.4,114.6c3.7,39.2,15.6,50.4,60.4,62.7c6.8-124.4,110-137.6,158.2-116c71.8,32.1,
    68.9,115.2,68.9,115.2h363.1c0,0-5.6-66.3,51.9-106.5c56.6-39.6,173.7-10.3,170.2,106.5c33.5,14.7,
    140.4-2.3,96.7-165.9c-18.3-51.6-53.9-32.4-198-75.3c-64.6-19.2-77.6-89.2-183.6-173.9c-24.7-19.7-73.6-20.2-101.6-20.3C288.8,
    242,166.7,332.1,84.3,425.4C44.3,443.9,22.5,471.3,11.7,501.4L11.7,501.4z M909.1,556.2c-3.5-5.2-2.7-13.1,
    0-20.8h60c0,0,10.3,19.3-0.8,50.3C954.8,586.2,934.2,593.1,909.1,556.2L909.1,556.2z M437.6,435.9V284.1c0,0,
    106.7-24.5,130.4-0.8c23.6,23.6,128.4,127,130,130.5c1.6,3.5,7.9,14.7,0,22.1H437.6L437.6,435.9z M177.9,406.4c97.6-97.8,
    195.9-111.3,195.9-111.3v132.4l-5.9,8.4c0,0-167.4-1.7-180.7-1.7C173.9,434.2,170.6,413.7,177.9,406.4z M19.2,507.6h53.2c-7.3,
    38.8-35.5,46.1-35.5,46.1H19.2V507.6z"/></g>
    </svg>
    `];
    let laneDiv = [`    
    <div class="lane">
        <div class="car" id="`,
        `id`,
        `">`,
        `carSvg`,
    `   </div>
    </div>
    `];

    function init() {
        setDrawListener();
        setStartListener();
    }

    function setDrawListener() {
        $('#drawArena').click(() => {
            $('.arena').html('');
            let laneCount = $('#carValue').val();
            let maxWidth = $('.arena').css('width'); // yapilacak
            if (laneCount) {
                arena = new Arena(maxWidth);
                for (let index = 0; index < laneCount; index++) {
                    const car = new Car();
                    const lane = new Lane(car);
                    arena.lanes.push(lane);
                    drawArena(index);
                }
            } else {
                alert('Please enter a valid number for car');
            }
        });
    }

    function drawArena(index) {
        carSvg[1] = arena.getLane(index).getCar().color;
        laneDiv[1] =index;
        laneDiv[3] = carSvg.join('').toString();

        $('.arena').append(laneDiv.join('').toString());
    }

    function setStartListener() {
        $('#start').click(() => {
            //let carArray = $('div.car').map( function() {return this} ).get();
            let timer = setInterval( function() {
                            arena.lanes.forEach(function (element, index) {
                                element.run();
                                $(`#${index}`).css('margin-left', arena.lanes[index].getCar().place);
                                $(`#${index} svg path`).css('fill', arena.lanes[index].currentColor);
                                if (arena.lanes[index].getCar().place > (arena.width - 50)){
                                    clearInterval(this);
                                }
                            });
                        }, 100);
                    });
    }


    init();

})(jQuery);