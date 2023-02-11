let modalBox = document.getElementsByClassName('modal-section')[0];
let modalImageContainer = document.getElementById('modalImageContainer');
let modalDescription = document.getElementById('modalDescription');
let modalDescriptionContainer = document.getElementsByClassName('modal-description-container')[0];
let modalImageName = document.getElementById('modalImageName');
let closeModal = document.getElementsByClassName('modal-closebutton')[0];
let mediaForMobile = window.matchMedia('(min-width: 390px) and (max-width: 620px)');
let mediaForSmallMobile = window.matchMedia('(max-width: 390px)');
let classArray = document.getElementsByClassName('name-of-image');


// OPENING / CLOSING SIDE NAVIGATION BAR

const openNav = () => {
    let navBar = document.getElementById('sideNav');
    let content = document.getElementById('main-content');
    let burgerIcon = document.getElementById('burger-icon');
    let media = window.matchMedia('(max-width: 600px)');

    if (media.matches) {
        navBar.style.width = '100%';
    } else {
        navBar.style.width = '40%';
        content.style.marginRight = '40%';
    }
    
    burgerIcon.style.display = 'none';
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

const closeNav = () => {
    let navbar = document.getElementById('sideNav');
    let content = document.getElementById('main-content');
    let burgerIcon = document.getElementById('burger-icon');

    content.style.marginRight = '0%';
    navbar.style.width = '0';
    burgerIcon.style.display = 'block';
}

// OPENING / CLOSING SIDE NAVIGATION BAR

// ACCORDION

let buttonAccordion = document.getElementsByClassName('accordion');
let i;

for ( i = 0; i < buttonAccordion.length; i++) {
    buttonAccordion[i].addEventListener('click', function() {
        this.classList.toggle('active');
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight= '200px';
        }
    })
}

// ACCORDION

// CLOSING MODAL
closeModal.onclick = function closeModal () { modalBox.style.display = 'none'; document.title = 'Main Gallery';}
// CLOSING MODAL

// OPENING MODAL

const imageClick = (name) => {
    if (mediaForMobile.matches) {
        modalImageContainer.style.gridAutoRows = '12em';
    } else if (mediaForSmallMobile.matches) {
        modalImageContainer.style.gridAutoRows = '10em';
    } else {
        modalImageContainer.style.gridAutoRows = '20em';
    }
    modalImageContainer.innerHTML = '';
    modalDescription.innerText = '';
    modalImageName.innerText = '';
    modalBox.style.display = 'block';
        if (name.toLowerCase() === 'reminiscence') {
            modalImageContainer.innerHTML = '<img src="../assets/images/digital-art/Reminiscence by Kayla.png" alt="Reminiscence by Kayla.png" type="image/png">';
            modalDescription.innerHTML = 'Childhood is a beautiful part of your life. This is when you feel excited to go outside and play with your friends joyously. All you ever focused on was wanting to find that one sneaky child in your hide-and-seek game, or that athletic and annoying kid whose movements were so swift that you wouldn\'t be able to tag him/her even when he/she stood in his/her place for awhile. It was frustrating, wasn\'t it? And although it felt like that, these emotions still put a smile on your face as you think back to those sweet, happy memories... <br><br>  Reminiscence allows you to remember the good ol\' days, and this artwork does just that. The moments way back during your childhood where you could still do everything freely, play outside as if there was no problem, play the famous childhood games “sungka”, “jolens”, “luksong lubid”, and also the popular toy of all time, the “trumpo” that was used mostly by boys. Those were the things that remain only as a fragment of your past, the happiest parts of your life that will linger within you and everyone else --- Forever... <br><br>  A rainfall of gratitude for Ms. Kayla Vannessa Vallejos for sharing with us her skills in making digital artworks as she brought forth this nostalgic piece of art where a girl can be seen looking at her past and the window symbolizes her mind. She used a cellphone and a software called "IbisPaint X" with the technique of Digital Painting.';
            modalImageName.innerText = 'Reminiscence by Kayla';
            document.title = 'Main Gallery' + ' | ' + modalImageName.innerText;
        } else if (name.toLowerCase() === 'unforgettable') {
            if (mediaForMobile.matches) {
                modalImageContainer.style.gridAutoRows = '18em';
            } else if (mediaForSmallMobile.matches) {
                modalImageContainer.style.gridAutoRows = '13em';
            } else {
                modalImageContainer.style.gridAutoRows = '25em';
            }

            modalImageContainer.innerHTML = ' <img src="../assets/images/traditional-art/Unforgettable_Ramos.jpg" alt="Unforgettable by Ramos.png" type="image/png">';
            modalDescription.innerHTML = 'You might be a 90\'s kid if you resonate with this art style. They used to utilize this style in television and  cartoons, right? Oh, it was definitely the best time to be born in if you wanted to fully experience the outdoor and carefree life of being a young Filipino child who would always go home dirty and smelling like Sinigang or the sun... <br><br>  Since then, graffiti artworks could be seen all over the Philippines, which were particularly scattered around the walls of different kinds of infrastructure. For some, it was considered vandalism, and the government concurred with this issue, so they usually repaint the walls. However, painting over visible graffiti artwork on walls didn\'t change the fact that it was there in the first place. This was similar to how vintage toys were made; there were constant innovations in creating new concepts as the years passed. From generation to generation, there were new trends when it comes to what stuff a kid should be playing. However, for some reason, classic toys such as sipa, yo-yo, plastic balloons, and so on became memorable to Filipinos and became a significant part of Filipino culture... <br><br> A special thanks to Mr. Franco Inyigo Ramos for doing his best in creating this unforgettable art style. He used an illustration board, colored pencils, a pencil, and Acrylic paint to bring this beautiful piece of art to life, along with the techniques called Sketch, Heavy pressure, and Back & Forth stroke.';
            modalImageName.innerText = 'Unforgettable by Franco';
            document.title = 'Main Gallery' + ' | ' + modalImageName.innerText;
        } else if (name.toLowerCase() === 'carousel') {
            if (mediaForMobile.matches) {
                modalImageContainer.style.gridAutoRows = '28em';
            } else if (mediaForSmallMobile.matches) {
                modalImageContainer.style.gridAutoRows = '20em';
            } else {
                modalImageContainer.style.gridAutoRows = '40em';
            }

            modalImageContainer.innerHTML = ' <img src="../assets/images/photography/CAROUSEL_Vasquez.jpg" alt="Carousel by Vasquez" type="image/jpg">';
            modalDescription.innerHTML = '"Mommy, daddy, let\'s go ride that thing!" you said to your parents with full excitement. Your eyes reflected the ever-changing lights of the Carousel as you stared upon the strong-looking unicorn cheerfully. The laughter of kids and parents alike traversed throughout the park as you and your father began to ride the steed. \"Look, it\'s mom!\" your father said joyfully as he pointed towards your mother who was waiting for the two of you to finish outside the fence. The both of you waved at your mom and teased her. Those moments were fun, weren\'t they? <br><br> When we were little, we would ask our parents to let us ride the carousel or merry-go-round that we would see in parks or malls. Due to its flashing lights, catchy melodies, and the horses that circle around, this ride is noticeable for children. <br><br> A special thanks to Ms. Daniela Nicole Vasquez for using an iPhone 11 and a Lightroom app and having allowed this pretty image of a carousel. ';
            modalImageName.innerText = 'Carousel by Daniela';
            document.title = 'Main Gallery' + ' | ' + modalImageName.innerText;
        } else if (name.toLowerCase() === 'kalye') {
            if (mediaForMobile.matches) {
                modalImageContainer.style.gridAutoRows = '28em';
            } else if (mediaForSmallMobile.matches) {
                modalImageContainer.style.gridAutoRows = '20em';
            } else {
                modalImageContainer.style.gridAutoRows = '40em';
            }

            modalImageContainer.innerHTML = ' <img src="../assets/images/photography/KALYE_Vasquez.jpg" alt="Kalye by Vasquez" type="image/jpg">';
            modalDescription.innerHTML = 'Stop, Look, Listen, and Learn! Pfft, this didn\'t apply to you, did it? All you ever cared about while on the streets was to tag that one kid who runs as slow as a turtle, to hide as fast as you can before the it finishes counting to 100, but they actually only counted to 10, to play pogs with and beat the kid who bought pogs from you, to win in tumbang preso, or to run away from the fatal weapon of your mother: The Slippers x100... <br><br> Do you recall your earlier days of playing in the “kalye” or streets? running with your friends until dusk while laughing aloud. These “kalye” serve as both a constant reminder of how carefree our youth was and a repository for our most priceless childhood memories. <br><br> A special thank you to Ms. Daniela Nicole Vasquez for using an iPhone 8+ and a Lightroom app to give our eyes a beautiful view of one of the roads where you\'d usually go and play.';
            modalImageName.innerText = 'Kalye by Daniela';
            document.title = 'Main Gallery' + ' | ' + modalImageName.innerText;
        } else if (name.toLowerCase() === 'honorary') {
            modalImageContainer.innerHTML = ' <img src="/assets/images/traditional-art/Honorary_Pua.PNG" alt="Honorary by Pua.png" type="image/png">';
            modalDescription.innerHTML = 'The mysterious, mighty, and intimidating old man/woman slowly approached you! He/She extended his/her arm! Oh no, he\'s/she\'s about to hit you! And! And... what... Why did he/she just pat your head? "Kumusta na ang apo ko?" he/she asks. You smile and reply in affirmation as you look at him/her, then you quickly said "Mano po, lo/la," and grabbed his/her other hand. Congratulations, you were labeled as a respectful child! <br><br> Most prominent in Filipino culture is the value of RESPECT. Honorary is a piece of art that depicts young people showing respect and honor to elderly people with the "Pagmamano" act. It specifically refers to Filipinos who have carried on this practice since they were children. Old people are usually respected because they are known to have more experiences as they are much older, and because of this, they have more insight in life that can help a young person prosper if he were to have these insights/pieces of knowledge... <br><br>  A special thanks to Mr. Lorenz Jacob Pua for using an illustration board, oil pastels, a pencil, and cottons to carefully craft this empowering and nostalgic image of a young man paying respects to his lola. He used the techniques Pencil sketch, Handstrokes, and Color Shadowing to bring this artwork to life.';
            modalImageName.innerText = 'Honorary by Lorenz';
            document.title = 'Main Gallery' + ' | ' + modalImageName.innerText;
        } else if (name.toLowerCase() === 'duyan') {
            if (mediaForMobile.matches) {
                modalImageContainer.style.gridAutoRows = '18em';
            } else if (mediaForSmallMobile.matches) {
                modalImageContainer.style.gridAutoRows = '13em';
            } else {
                modalImageContainer.style.gridAutoRows = '25em';
            }

            modalImageContainer.innerHTML = ' <img src="../assets/images/photography/DUYAN_Ygar,M..jpg" alt="Duyan by Ygar.jpg" type="image/jpg">';
            modalDescription.innerHTML = 'This image is the epitome of childhood: One where you would try to swing up as high as you can with someone\'s help (It could\'ve also been by yourself.) and you\'d gleefully laugh as death awaits you each time you swung down. You could\'ve also been the type who appreciated the beauty of everything around you: The birds, the trees, the soft breeze... <br><br> A "duyan," or swing, served as my favorite spot when I was younger. My parents and I spend the most of our time here. I remember giggling as they swung me up high  as the wind brushes my skin. A sentimental moment to remember. That\'s why a "duyan" has always been my favorite spot to visit when I want to reminisce about my youth... <br><br>  A special thank you to Mr. Michael Andrei Ygar for using an iPhone 11 camera, a Lightroom app, and a Snapseed app to share with us an image of a swing where we used chill and sing. The techniques he used to capture this moment are: Contrast, Horizontal, and the Rule of Thirds.';
            modalImageName.innerText = 'Duyan by Michael';
            document.title = 'Main Gallery' + ' | ' + modalImageName.innerText;
        } else if (name.toLowerCase() === 'kapre') {
            if (mediaForMobile.matches) {
                modalImageContainer.style.gridAutoRows = '24em';
            } else if (mediaForSmallMobile.matches) {
                modalImageContainer.style.gridAutoRows = '20em';
            } else {
                modalImageContainer.style.gridAutoRows = '30em';
            }

            modalImageContainer.innerHTML = ' <img src="../assets/images/digital-art/Uson-part1childhoodfears.png" alt="Kapre by Uson.png" type="image/png">';
            modalDescription.innerHTML = 'Boo! It\'s one of the worst (or best?) creatures in the night time stories that your mother would tell you so you will not stay up late and be a good child who stays at home when the sun set... <br><br> Made in a creepy charcoal texture artstyle, A childhood fear is expressed through this art. An evil spirit from the filipino folklore called a “Tikbalang” is feared among children whenever they roam around trees... <br><br> A special thanks to Mr. Jonathan Zachary Kyle Uson for giving us a reminder of the goosebumps we felt as a child because of the stories that we used to hear. He used IbisPaintX and a technique of digital art while giving us the illusion of charcoal being used because of its texture.';
            modalImageName.innerText = 'Kapre by Zachary Kyle';
            document.title = 'Main Gallery' + ' | ' + modalImageName.innerText;
        } else if (name.toLowerCase() === 'kalaro') {
            if (mediaForMobile.matches) {
                modalImageContainer.style.gridAutoRows = '28em';
            } else if (mediaForSmallMobile.matches) {
                modalImageContainer.style.gridAutoRows = '20em';
            } else {
                modalImageContainer.style.gridAutoRows = '40em';
            }

            modalImageContainer.innerHTML = ' <img src="../assets/images/photography/KALARO_Ygar,M..jpg" alt="Kalaro by Ygar.jpg" type="image/jpg">';
            modalDescription.innerHTML = 'Titters and giggles could be heard from outside the living room where a middle-aged woman stood. She was smoothing out a wrinkled shirt on the ironing board. Not long after, a squeaky voice was heard saying, "Tao po!" so the middle-aged woman, your mother, stopped what she was doing and quickly met them outside. As soon as she saw the face of the owner of the voice, she warmly said, "Oh, pasok kayo mga anak," and opened the gate. With its creak, you woke up and soon joined your cheery little friends in playing under the morning sun... <br><br> These are the thoughts of the photographer, Mr. Michael Andrei Ygar: The nicest part of my youth was having a "kalaro," or playmate. They used to make me laugh. I remember that. They were the ones with whom I used to hang out until dusk without being frightened about our mother\'s calls. The fellas on whom I created my amazing childhood experiences... <br><br> A special thank you to Mr. Michael Andrei Ygar for using an iPhone 11 camera phone, a Lightroom app, and a Snapseed app and giving us a view of three playmates living out a moment that will perhaps become one of their memories which will help them in the hardships they will face as they grow up. The technique he used is Simplification.';
            modalImageName.innerText = 'Kalaro by Michael';
            document.title = 'Main Gallery' + ' | ' + modalImageName.innerText;
        } else if (name.toLowerCase() === 'playground') {
            modalImageContainer.innerHTML = ' <img src="../assets/images/photography/PLAYGROUND_Ygar,M..jpg" alt="Playground by Ygar.jpg" type="image/jpg">';
            modalDescription.innerHTML = '"My child is like Superman, huh!" your father teased you as you cross the high set of bars like a monkey. You thought you were very strong, but in reality, it was your father! Still, those were the days when you began to develop a sense for adventure. Besides, doing physical activities definitely helped you as a child and might\'ve been the reason why you have a six-pack right now. Oh... you don\'t... Well, that\'s unfortunate... <br><br> As children, going to a playground makes our hearts race. It\'s a wonderful place where we can have fun without worrying knowing our parents are watching over us from afar. This is a place where we once had a short-term buddy who we might never see again and a place where we wrote the unforgettable plays of our youth... <br><br> A shower of gratitude to Mr. Michael Andrei Ygar for using an iPhone 11 camera, Lightroom app, and Snapseed app for being able to capture a moment of father and son having a peaceful and blissful time in the playground: where we once created chaos. He used three techniques: Contrast, Horizontal, and the Rule of Thirds.';
            modalImageName.innerText = 'Playground by Michael';
            document.title = 'Main Gallery' + ' | ' + modalImageName.innerText;
        } else if (name.toLowerCase() === 'kalsada') {
            modalImageContainer.innerHTML = ' <img src="../assets/images/traditional-art/Kalsada_Ordinario.jpg" alt="Kalsada by Ordinario.jpg" type="image/jpg">';
            modalDescription.innerHTML = 'If there\'s a kalye, then there\'s a kalsada. Well, they\'re the same... Oh well... You definitely are more used to the term "Kalsada," aren\'t you? Have you ever experienced being so hyped that you didn\'t notice a car closely approaching you? Maybe you climbed a tree so that one less strong friend of yours won\'t be able to tag you, you clever little child... <br><br> When we were younger, the only way we could release our urge to beat people and socialize was by going outside. We met new friends and had fun, didn\'t we? And those times were more tranquil and it gave you a peace of mind since technology like smartphones and social media didn\'t exist then. The artwork shows some of the games that one would usually play during their childhood to pass their time like tumbang preso, taya-tayaan (a game of tag), luksong baka, etc.... <br><br> Special thanks to Mr. Uriel Matthew Ordinario for using an illustration board, a pencil, oil pastels, cotton buds, and a ruler to give us this pretty artwork. The techniques he used are: Sketch, Heavy pressure, and Back & Forth stroke.';
            modalImageName.innerText = 'Kalsada by Uriel';
            document.title = 'Main Gallery' + ' | ' + modalImageName.innerText;
        } else if (name.toLowerCase() === 'sablay') {
            if (mediaForMobile.matches) {
                modalImageContainer.style.gridAutoRows = '28em';
            } else if (mediaForSmallMobile.matches) {
                modalImageContainer.style.gridAutoRows = '20em';
            } else {
                modalImageContainer.style.gridAutoRows = '40em';
            }

            modalImageContainer.innerHTML = ' <img src="../assets/images/digital-art/Sablay_Padit.jpg" alt="Sablay by Padit.jpg" type="image/jpg">';
            modalDescription.innerHTML = 'Inhale... Exhale... "You got this, boy/girl!" you received hype from your friends/playmates and even from yourself since you wanted to beat them or probably impress that one girl/boy whom you liked. There should be no problem hitting that now, was ther-- Ugh! You missed by an inch! Hahaha, those were the times when you\'d either get irritated or just laugh it off. I was usually the latter. Are you?... <br><br>  Made in pixel art style, \'Sablay\' is an attempt to relive the joys and tribulations of playing the classic pinoy game "Tumbang Preso". The old pinoy youth revels in playing games carefree yet rowdily, competitive yet casual, and grueling yet fun... <br><br> A round of applause and a cheers of gratitude for Mr. Johan Howard Padit for creating this masterpiece of a digital art that not only makes us remember the games we used to play physically, but also the games we played before the age of smartphones and high-end computers: Retrogames! Through the technique of pixel art and using Adobe Photoshop, he was able to create an image of children playing as if it was a game from the era of Pac-Man ( with better graphics ;) ).';
            modalImageName.innerText = 'Sablay by Padit';
            document.title = 'Main Gallery' + ' | ' + modalImageName.innerText;
        } else if (name.toLowerCase() === 'ngiti') {
            if (mediaForMobile.matches) {
                modalImageContainer.style.gridAutoRows = '24em';
            } else if (mediaForSmallMobile.matches) {
                modalImageContainer.style.gridAutoRows = '20em';
            } else {
                modalImageContainer.style.gridAutoRows = '30em';
            }

            modalImageContainer.innerHTML = ' <img src="../assets/images/photography/NGITI_Salcedo.jpg" alt="Ngiti by Salcedo.jpg" type="image/jpg">';
            modalDescription.innerHTML = 'Young ones who push the doorbell of someone\'s house then runs away did exist, and even though they were adorable, they were quite annoying, weren\'t they? Oh, were you one of them? Sorry... However, you may have also been like one of these kids in the photo whom caught the attention of Ms. Lea Joy Salcedo since they were looking at her. If you were, then you were probably as sweet as them... <br><br> These are the thoughts of the photographer, Ms. Lea Joy Salcedo, before and during the time she took this picture: “I got used to the fact that there are always children playing in front of our house but the moment I took this picture, two adorable little neighbor girls were just watching me key unlock the door as I got home from school on November 23, 2022. They caught my eye for their matching purple headbands, and cute dresses, and we chatted for a bit, asked their names, how old they were, and what color they liked. I was lifted up by the chit-chat we had, recalling how I used to think the world was just about playing, colors, laughter, offering undivided attention, and learning something new from every new experience...” <br><br>  It is of utmost necessity to offer gratitude to fate as it allowed Ms. Lea Joy Salcedo to experience the warmth youth can bring and because of this, it allowed her to bring this heartwarming image of two children who we may or may not see again. Such a rare occurence, this is! A thank you to Ms. Salcedo for using a camera phone and a VSCO app and allowed us to have a bit of what you have experienced when she met these precious kids. The techniques she used to create this masterpiece are: Simplification, Repitition, Pattern.';
            modalImageName.innerText = 'Ngiti by Lea';
            document.title = 'Main Gallery' + ' | ' + modalImageName.innerText;
        } else if (name.toLowerCase() === 'merienda') {
            if (mediaForMobile.matches) {
                modalImageContainer.style.gridAutoRows = '18em';
            } else if (mediaForSmallMobile.matches) {
                modalImageContainer.style.gridAutoRows = '13em';
            } else {
                modalImageContainer.style.gridAutoRows = '25em';
            }

            modalImageContainer.innerHTML = ' <img src="../assets/images/traditional-art/Merienda_Villaflor.jpg" alt="Merienda by Vilaflor.jpg" type="image/jpg">';
            modalDescription.innerHTML = 'You were one big eater, weren\'t you? To the point that you\'d even eat weird stuff like a worm-shaped candy or you might\'ve been the type to suck on candy that tasted and looked like lipstick... You did you, no judges there... Anyway, as a child, you\'d been exposed to various Filipino delicacies like Turon, BananaQ, Sapin-sapin, Kutsinta, Bola-bola, etc. and these were one of the things you\'d usually eat as your merienda. And they\'re probably still being devoured by you to this day with how delicious, tasty, and fulfilling they are... <br><br> When we talk about food during childhood, how could we not remember the merienda that our mothers used to prepare for us in the afternoon? Or perhaps the food we buy from the street vendors that pass our homes? Merienda has been a big part of our life growing up since most of the time we sit, eat, and talk to not just our family, but our friends too while eating indoors or outdoors... <br><br> A special thank you to Ms. Rji Anne Jonette Villaflor for thinking of creating an art relevant to food, specially merienda as this makes you crave for one right now, doesn\'t it? She used an illustration board, colored pencils, a pencil, and a drawing pen to apply the techniques of Sketch, Heavy pressure, Back & Forth stroke, and Scrumbling, and allowing this cute piece of art to be viewed by our eyes, with it serving as their merienda.';
            modalImageName.innerText = 'Merienda by Rji Anne';
            document.title = 'Main Gallery' + ' | ' + modalImageName.innerText;
        } else if (name.toLowerCase() === 'nostalgia') {
            modalImageContainer.innerHTML = ' <img src="../assets/images/digital-art/Nostalgia Strike by Orcajada.png" alt="Nostalgia Strikes by Orcajada.png" type="image/png">';
            modalDescription.innerHTML = 'You are eating fried chicken as you see a family of four enter with bright smiles and the two children excitedly tells their dad that they want the spaghetti and the one you\'re currently having. They sit down in front of you and the cute little boy smiles at you. You blink at him as you hold a wide grin, but then the boy asks, "Mom, why is that man/lady crying?" You look back, thinking it\'s another person that the kid was pointing at in your direction. The mother turns around and looks at you and sees the tears falling from your eyelids. "Are you okay, mister/miss?" she asks. You reply affirmatively after noticing the drops falling on your chicken\'s crispy skin. You grab a tissue and wipe them off. Just what did you think of for you to not notice that you have been shedding tears?... <br><br>  An old person is reminiscing about a time in the past. Wherein he/she felt joy for the first time in his/her life and he knows that time can\'t ever be turned back... <br><br> Special thanks to Mr. Jessler James Orcajada for using IbisPaintX and the techniques of Digital Art and Shading to allow us to indulge in a view of a person\'s reminiscence of the past whenever he/she would get hit by nostalgia\'s strike.';
            modalImageName.innerText = 'Nostalgia Strikes by Jessler';
            document.title = 'Main Gallery' + ' | ' + modalImageName.innerText;
        } else if (name.toLowerCase() === 'manananggal') {
            if (mediaForMobile.matches) {
                modalImageContainer.style.gridAutoRows = '24em';
            } else if (mediaForSmallMobile.matches) {
                modalImageContainer.style.gridAutoRows = '20em';
            } else {
                modalImageContainer.style.gridAutoRows = '30em';
            }

            modalImageContainer.innerHTML = ' <img src="../assets/images/digital-art/Uson-part2childhoodfears.png" alt="Manananggal by Uson.png" type="image/png">';
            modalDescription.innerHTML = 'The silence comes along as the sun hides under the Earth, leaving nothing but darkness. In the midst of chirping insects and hooting owls, stood a decrepit and scary-looking woman hungry for babies. With each crunch, a part of her hip is separated from her torso... Ever-so-slowly, she pulled them apart and her insides quickly got pulled by gravity, leaving them hanging like clothes being dried out in the sun. She flew off into the dark moonlit sky with her bat-like wings spread open, and laughed eerily as to hint the nearby families that it\'s time for her to hunt... For babies!... <br><br> Most of the filipino children fear this mythological creature. It\'s a vampire-like lady that detaches their lower half in order to fly and hunt babies and children which is why it is feared among children... <br><br> Thanks to Mr. Jonathan Zachary Kyle Uson for using an IbisPaintX software to design this cute image of a manananggal, hiding its ferocity and the frightening image that\'s portrayed by our family. He used the technique of digital art.';
            modalImageName.innerText = 'Manananggal by Zachary Kyle';
            document.title = 'Main Gallery' + ' | ' + modalImageName.innerText;
        } else if (name.toLowerCase() === 'treats') {
            if (mediaForMobile.matches) {
                modalImageContainer.style.gridAutoRows = '28em';
            } else if (mediaForSmallMobile.matches) {
                modalImageContainer.style.gridAutoRows = '20em';
            } else {
                modalImageContainer.style.gridAutoRows = '40em';
            }

            modalImageContainer.innerHTML = ' <img src="../assets/images/photography/blank (6)_Salcedo.jpg" alt="Luscious Treats by Salcedo.jpg" type="image/jpg">';
            modalDescription.innerHTML = 'Hmmm! Your mouth, nose, eyes, and mind sang in harmonious joy as you chewed on that luscious treat. Something sweet? You teeth darkened... Something sour? Your face said no, but your mouth said "YES! YES! YES!" Children\'s treats that you used to enjoy might not taste the same way as it used to, but the memories of you eating them still remains deep in your heart, don\'t they?... <br><br> This shelf of toothsome candies in Divisoria we used to eat as a child reminds us of the deciduous or baby teeth we lost due to our parents\' insistence that we always eat sweets. Some popular candies on this shelf are Stick-O, Frutos, Pintoora, Pochi, Flat Tops, Champi, and Haw Haw Milk Candy. But honestly, in the colorful array before us, these childhood snacks and candies were what attracted our hungry little eyes, which resulted to our adorable little smiles... <br><br> Special thanks to Ms. Lea  Joy Salcedo for using a camera phone, a VSCO app, and an Afterlight app to make this image come alive where various treats for a child (and adults :D) can be seen.';
            modalImageName.innerText = 'Luscious Treats by Lea';
            document.title = 'Main Gallery' + ' | ' + modalImageName.innerText;
        } else if (name.toLowerCase() === 'palaruan') {
            if (mediaForMobile.matches) {
                modalImageContainer.style.gridAutoRows = '26em';
            } else if (mediaForSmallMobile.matches) {
                modalImageContainer.style.gridAutoRows = '20em';
            } else {
                modalImageContainer.style.gridAutoRows = '35em';
            }

            modalImageContainer.innerHTML = ' <img src="../assets/images/photography/blank (1)_Salcedo.jpg" alt="Palaruan by Salcedo.jpg" type="image/jpg">';
            modalDescription.innerText = '';
            modalImageName.innerText = 'Palaruan by Lea';
            document.title = 'Main Gallery' + ' | ' + modalImageName.innerText;
        } else if (name.toLowerCase() === 'kalinga') {
            if (mediaForMobile.matches) {
                modalImageContainer.style.gridAutoRows = '26em';
            } else if (mediaForSmallMobile.matches) {
                modalImageContainer.style.gridAutoRows = '20em';
            } else {
                modalImageContainer.style.gridAutoRows = '35em';
            }

            modalImageContainer.innerHTML = ' <img src="../assets/images/traditional-art/Kalinga.jpg" alt="Kalinga by Ramirez.jpg" type="image/jpg">';
            modalDescription.innerHTML = 'Your mother wrote you a letter saying: "Dear child, in times of joy and celebration, I will be there to embrace you and give you warmth and company. In times of sorrow and agony, I will be with you and give you warmth and a shoulder you can cry on. In times of loneliness, I will give you happiness and love. In moments of rebellion, I will be here, waiting for the day that you\'d realize just how much I treasure, love, and adore you. You are my precious child and always will be. I love you... " <br><br>  In response, you wrote back to her: "Dear mother, you have always been the light in my world. I may look away, but you have always been there whenever, wherever. Thank you for the love, care, and guidance you\'ve given me. Because of this, I was able to become the person that I am today. You are my gardener, my nurturer, and I hope that you will still be alive when I become successful. I will show you the most beautiful of things in the whole wide world and make you feel young again. I love you too, mother..." <br><br> In the Filipino language, Kalinga means protecting and caring for someone. A Filipino mother and a child are both represented in this work of art as they display affection and protectiveness toward each other. Seeing this artwork might remind you of the times when they would wait patiently for you to come home and took care of you through physical touch and verbal and emotional affirmation... <br><br> A huge round of applause and gratitude to Ms. Phoemela Keith Ramirez for putting in the effort of making a paper mache using a wire, paper, glue, foil, wipes, and a tape to remind us the beatiful love a mother has for their child. A heartwarming experience and dynamic to ever feel in this world full of flaws and cruelty. She used the techniques that are used in making a paper mache.';
            modalImageName.innerText = 'Kalinga by Phoemela';
            document.title = 'Main Gallery' + ' | ' + modalImageName.innerText;
        } else if (name.toLowerCase() === 'anamnesis') {
            if (mediaForMobile.matches) {
                modalImageContainer.style.gridAutoRows = '28em';
            } else if (mediaForSmallMobile.matches) {
                modalImageContainer.style.gridAutoRows = '20em';
            } else {
                modalImageContainer.style.gridAutoRows = '40em';
            }

            modalImageContainer.innerHTML = ' <img src="../assets/images/traditional-art/Anamnesis_Pehipol.jpg" alt="Anamnesis by Pehipol.jpg type="image/jpg">';
            modalDescription.innerHTML = 'Memories: A horrifying thing yet this can also be a life-saver. The moments when you\'d feel at your lowest point is when your past comes to life. You are reminded of the good things, and this makes you hold on tight even onto the thinnest and weakest thread as much as you can, for as long as you have to. You hold on... Until the time that your thread becomes strong and mighty once again. Make good memories, and with this, you will always have something to look at whenever you\'d feel down. Look forward in creating something better and more memorable for the future you to thank you for... <br><br> This artwork is called Anamnesis which basically means \'the remembering of things from a supposed previous existence.\' A protrait of a woman was drawn by the artist and inside her head are all the things that made her childhood something worth to remember. This art is all about reminiscing the past memories that made her life joyous and carefree... <br><br> A special thanks to Ms. Biana Denise Pehipol for using a Vellum board, a pencil, colored pencils, and an eraser and allowing us to see inside of a woman\'s mind. The technique she used is called Pencil drawing.';
            modalImageName.innerText = 'Anamnesis by Bianca';
            document.title = 'Main Gallery' + ' | ' + modalImageName.innerText;
        } else if (name.toLowerCase() === 'piko') {
            if (mediaForMobile.matches) {
                modalImageContainer.style.gridAutoRows = '26em';
            } else if (mediaForSmallMobile.matches) {
                modalImageContainer.style.gridAutoRows = '20em';
            } else {
                modalImageContainer.style.gridAutoRows = '35em';
            }

            modalImageContainer.innerHTML = ' <img src="../assets/images/photography/PIKO_Vasquez.jpg" alt="Piko by Vasquez.jpg" type="image/jpg">';
            modalDescription.innerHTML = 'You were so adorable back when you were a kid, were you not? To the point that even when you were to be covered in dirt and mud, it would still make an adult want to squeeze your cutie cheeks. Remember when you would use a chalk to draw a stage for "Piko" and you would use a rock when your mother did not allow your hands to get dusted with chalkpowder? Those were the good times... <br><br>   Piko is one of the well-known childhood games played by Filipinos. A pattern of boxes is drawn on a concrete floor using chalk or a soft stone to play this game. The pamato used by players is a stone that they toss into a box before skipping forward and backward. They will keep doing this until they finish the level or get the boxes as their own/bahay... <br><br>  A special thank you to Ms. Daniela Nicole Vasquez for using an iPhone 8+, a Snapseed app, and a Lightroom app to bring us this dirty yet gorgeous image of stones and numbers.';
            modalImageName.innerText = 'Piko by Daniela';
            document.title = 'Main Gallery' + ' | ' + modalImageName.innerText;
        } else if (name.toLowerCase() === 'ilog') {
            if (mediaForMobile.matches) {
                modalImageContainer.style.gridAutoRows = '26em';
            } else if (mediaForSmallMobile.matches) {
                modalImageContainer.style.gridAutoRows = '20em';
            } else {
                modalImageContainer.style.gridAutoRows = '40em';
            }

            modalImageContainer.innerHTML = ' <img src="../assets/images/photography/ILOG_Salcedo.jpg" alt="Ilog by Lea.jpg" type="image/jpg">';
            modalDescription.innerHTML = 'Eek! The wind is freezing today. And yet... you cannonballed into the water?! Your mother would be mad, would she not? You gave shock, surprise, excitement,fear, and panic to those around you with your love for water, especially your parents/guardians, did you not? Such fun days where even when you were taking a bath or a swim, you would still play and have fun with those around you, giving the scared-y cats fright and panic... <br><br> Before and during the time when the photographer, Ms. Lea Joy Salceo took this photo, these were her thoughts: “We were waiting for the rain to stop inside the UP Diliman campus and heard three clever little boys playing at the back of the waiting shed. Having been in this situation myself as a child, it did not matter if the river had a speck of impure dirt on it while we were swimming and playing. The sight of them brightened my day, and I thought it would be nice to ask them for a picture as I suddenly recalled every little moment we had on a river with my cousins back when we were still young..." <br><br> Special thanks to Ms. Lea Joy Salcedo for using a camera phone and a VSCO App to bring forth this endearing image of three kids having a bath in the middle of the day and only caring about having fun in the water. The techniques she used are: Depth of Field and Framing...';
            modalImageName.innerText = 'Ilog by Lea';
            document.title = 'Main Gallery' + ' | ' + modalImageName.innerText;
        }

        if (modalImageContainer.children != []) {
            modalImageContainer.children[0].addEventListener('click', toggleFullScreen);
        }
}

// IMAGE LINKS / OPENING MODAL

// FULL SCREEN IMAGE

const toggleFullScreen = () => {
    if (document.fullscreenElement === null) {
        modalImageContainer.children[0].requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

// FULL SCREEN IMAGE


// SEARCHBAR

const searchFunction1 = () => {
    let input1, nameOfImage, imageCard;
    input1 = document.getElementById('searchBar1').value.toUpperCase();
    imageCard = document.getElementsByClassName('card');

    for ( i = 0; i < imageCard.length; i++) {
        nameOfImage = imageCard[i].getElementsByClassName('name-of-image')[0];

            if (nameOfImage.innerText.toUpperCase().includes(input1)) {
                imageCard[i].style.display = '';
            } else {
                imageCard[i].style.display = 'none';
            }
    } 
}

const searchFunction2 = () => {
    let input2, nameOfImage, imageCard;
    input2 = document.getElementById('searchBar2').value.toUpperCase();
    imageCard = document.getElementsByClassName('card');
    
    for ( i = 0; i < imageCard.length; i++) {
        nameOfImage = imageCard[i].getElementsByClassName('name-of-image')[0];
        if (nameOfImage.innerText.toUpperCase().includes(input2)) {
            imageCard[i].style.display = '';
        } else {
            imageCard[i].style.display = 'none';
        }
    }
}

// SEARCHBAR;