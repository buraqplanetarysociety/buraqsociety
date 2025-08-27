export interface CampYear {
    id: string;
    year: string;
    title: string;
    coverImage: string;
    highlight: string;
    videoLink?: string; // Made optional since some years don't have videos
    aboutCamp: {
        heading: string;
        paragraph: string;
    };
    values: string[];
    photos: {
        id: string;
        src: string;
        alt: string;
        size: 'small' | 'medium' | 'large' | 'banner' | 'grid';
    }[];
}

export const campYears: CampYear[] = [
    {
        "id": "buraq-2024",
        "year": "2024",
        "title": "2024",
        "coverImage": "/images/gallery/2024-25/buraqCover2024.png",
        "highlight": "Camp 2024 Adventures",
        "videoLink": "https://www.youtube.com/embed/QxArNQssgXM",
        "aboutCamp": {
            "heading": "THE EPITOME OF EXCELLENCE ",
            "paragraph": "No longer a mere camp, Buraq had become a realm only few could enter, a phenomenon whispered in aspiration, pursued with intent. With thousands vying for a handful of spots, selection became a mark of distinction. To be selected was not just an honour; it was a calling- not for credentials, but for potential. For within the fabric of Buraq lies something intangible — a space where minds are awakened, bonds are forged, and youth are shaped into forces the world has yet to reckon with. Those who arrived did not just attend a camp; they stepped into a crucible where the ordinary dissolved. Under starlit silence and through relentless challenge, Here, knowledge was not delivered — it was unearthed. To be chosen was to join a legacy of excellence, where every cadet earned their place among a league as exclusive as it is extraordinary."
        },
        "values": ["Excellence "," Composure ","Comradeship" , "Integrity"],
        "photos": [
            { "id": "1", "src": "/images/gallery/2024-25/buraqCover2024.png", "alt": "Camp 2024 Cover", "size": "banner" },
            { "id": "2", "src": "/images/gallery/2024-25/IMG_3630.png", "alt": "Camp 2024 Photo 1", "size": "large" },
            { "id": "3", "src": "/images/gallery/2024-25/IMG_4022.png", "alt": "Camp 2024 Photo 2", "size": "medium" },
            { "id": "4", "src": "/images/gallery/2024-25/IMG_4027.png", "alt": "Camp 2024 Photo 3", "size": "small" },
            { "id": "5", "src": "/images/gallery/2024-25/IMG_4051.png", "alt": "Camp 2024 Photo 4", "size": "medium" },
            { "id": "6", "src": "/images/gallery/2024-25/IMG_4081.png", "alt": "Camp 2024 Photo 5", "size": "large" },
            { "id": "7", "src": "/images/gallery/2024-25/IMG_4085.png", "alt": "Camp 2024 Photo 6", "size": "small" },
            { "id": "8", "src": "/images/gallery/2024-25/IMG_4089.png", "alt": "Camp 2024 Photo 7", "size": "medium" },
            { "id": "9", "src": "/images/gallery/2024-25/IMG_4123.png", "alt": "Camp 2024 Photo 8", "size": "large" }
        ]
    },
    {
        "id": "buraq-2023",
        "year": "2023",
        "title": "2023",
        "coverImage": "/images/gallery/2023/buraqCover2023.png",
        
        "highlight": "Camp 2023 Adventures",
        "videoLink": "https://www.youtube.com/embed/3wzoA-VQiH4",
        "aboutCamp": {
            "heading": "BACK IN MOTION",
            "paragraph": "2023 marked Buraq’s long-awaited return after a three-year pause due to the Covid pandemic. There were uncertainties, naturally — systems to rebuild, routines to relearn — but the spirit never wavered. Remarkably, everything still worked. The foundation laid in previous years held strong, and what followed was a camp that balanced the weight of legacy with the excitement of a fresh start."
        },
        "values": ["Agility","Community Building","Balance"],
        "photos": [
            { "id": "1", "src": "/images/gallery/2023/buraqCover2023.png", "alt": "Camp 2023 Cover", "size": "banner" },
            { "id": "2", "src": "/images/gallery/2023/Copy of Copy of 481335024_1685233578741567_4449100659819222051_n.jpg", "alt": "Camp 2023 Photo 1", "size": "large" },
            { "id": "3", "src": "/images/gallery/2023/Copy of Copy of 481336554_1685236392074619_3553161081559918064_n.jpg", "alt": "Camp 2023 Photo 2", "size": "medium" },
            { "id": "4", "src": "/images/gallery/2023/Copy of Copy of 481905847_1685234598741465_5484159390321012233_n.jpg", "alt": "Camp 2023 Photo 3", "size": "small" },
            { "id": "5", "src": "/images/gallery/2023/Copy of Copy of 482086739_1685233595408232_1839474081704732089_n.jpg", "alt": "Camp 2023 Photo 4", "size": "medium" },
            { "id": "6", "src": "/images/gallery/2023/Copy of Copy of 482236196_1685233728741552_4660571594644229553_n.jpg", "alt": "Camp 2023 Photo 5", "size": "large" },
            { "id": "7", "src": "/images/gallery/2023/Copy of Copy of 482250601_1685233698741555_853925506693086041_n.jpg", "alt": "Camp 2023 Photo 6", "size": "small" },
            { "id": "8", "src": "/images/gallery/2023/Copy of IMG_8584.JPG", "alt": "Camp 2023 Photo 7", "size": "medium" },
            { "id": "9", "src": "/images/gallery/2023/Copy of IMG_8585.JPG", "alt": "Camp 2023 Photo 8", "size": "large" },
            { "id": "10", "src": "/images/gallery/2023/Copy of IMG_8586.JPG", "alt": "Camp 2023 Photo 9", "size": "small" },
            { "id": "11", "src": "/images/gallery/2023/Copy of IMG_8587.JPG", "alt": "Camp 2023 Photo 10", "size": "medium" },
            { "id": "12", "src": "/images/gallery/2023/Copy of IMG_8591.JPG", "alt": "Camp 2023 Photo 11", "size": "large" },
            { "id": "13", "src": "/images/gallery/2023/Copy of IMG_8592.JPG", "alt": "Camp 2023 Photo 12", "size": "small" },
            { "id": "14", "src": "/images/gallery/2023/Copy of IMG_8593.JPG", "alt": "Camp 2023 Photo 13", "size": "medium" },
            { "id": "15", "src": "/images/gallery/2023/Copy of IMG_8594.JPG", "alt": "Camp 2023 Photo 14", "size": "large" },
            { "id": "16", "src": "/images/gallery/2023/Copy of IMG_8597.JPG", "alt": "Camp 2023 Photo 15", "size": "small" },
            { "id": "17", "src": "/images/gallery/2023/Copy of IMG_8598.JPG", "alt": "Camp 2023 Photo 16", "size": "medium" },
            { "id": "18", "src": "/images/gallery/2023/Copy of IMG_8599.PNG", "alt": "Camp 2023 Photo 17", "size": "large" }
        ]
    },
    {
        "id": "buraq-2019",
        "year": "2019",
        "title": "2019",
        "coverImage": "/images/gallery/2019/buraqCover2019.png",
        
        "highlight": "Camp 2019 Adventures",
        "aboutCamp": {
            "heading": "EXECUTION AT ITS FINEST",
            "paragraph": "By 2019, Buraq had become a well-oiled machine. Every detail, from logistics to lectures, ran with quiet precision. The systems were smooth, the expectations high, and the standard uncompromising. It was a year defined not by reinvention, but by excellence in execution."
        },
        "values": ["Creative Problem Solving ","Boldness ", "Analytical Thinking"],
        "photos": [
            { "id": "1", "src": "/images/gallery/2019/buraqCover2019.png", "alt": "Camp 2019 Cover", "size": "banner" },
            { "id": "2", "src": "/images/gallery/2019/Copy of 10634b39-3d72-4943-97d9-7b47c530c423.jpg", "alt": "Camp 2019 Photo 1", "size": "large" },
            { "id": "3", "src": "/images/gallery/2019/Copy of 1d9d3c30-7e91-42ef-9f56-0d868a7a4aca.jpg", "alt": "Camp 2019 Photo 2", "size": "medium" },
            { "id": "4", "src": "/images/gallery/2019/Copy of 27541ccf-7294-48ae-9f17-66710d6fc4fb.jpg", "alt": "Camp 2019 Photo 3", "size": "small" },
            { "id": "5", "src": "/images/gallery/2019/Copy of 3cfcfcc4-1725-4345-96a2-8cbb1e9c9cf8.jpg", "alt": "Camp 2019 Photo 4", "size": "medium" },
            { "id": "6", "src": "/images/gallery/2019/Copy of 4136e8d1-1a9f-4cfa-96a5-e178b903d8c1.jpg", "alt": "Camp 2019 Photo 5", "size": "large" },
            { "id": "7", "src": "/images/gallery/2019/Copy of 66fdbb2f-9224-4cf7-b4b1-7cb94371966c.jpg", "alt": "Camp 2019 Photo 6", "size": "small" },
            { "id": "8", "src": "/images/gallery/2019/Copy of 72d9714f-dd63-46ce-9858-0017850822e8.jpg", "alt": "Camp 2019 Photo 7", "size": "medium" },
            { "id": "9", "src": "/images/gallery/2019/Copy of 7af3974c-36c2-4fa0-b0db-bbd18c12be6b.jpg", "alt": "Camp 2019 Photo 8", "size": "large" },
            { "id": "10", "src": "/images/gallery/2019/Copy of 96f75663-0d79-4aa4-8e51-74247d967eea.jpg", "alt": "Camp 2019 Photo 9", "size": "small" },
            { "id": "11", "src": "/images/gallery/2019/Copy of Copy of 472159156_10171507847150377_866178860237230494_n.jpg", "alt": "Camp 2019 Photo 10", "size": "medium" },
            { "id": "12", "src": "/images/gallery/2019/Copy of Copy of 472464723_10171507786600377_1738207098061111769_n.jpg", "alt": "Camp 2019 Photo 11", "size": "large" },
            { "id": "13", "src": "/images/gallery/2019/Copy of Copy of 81749662_892016957879787_5683669830708756480_n.jpg", "alt": "Camp 2019 Photo 12", "size": "small" },
            { "id": "14", "src": "/images/gallery/2019/Copy of Copy of 92789749_594723537792582_7604814423105994752_n.jpg", "alt": "Camp 2019 Photo 13", "size": "medium" },
            { "id": "15", "src": "/images/gallery/2019/Copy of fdb3e88a-25db-45ba-8681-595fbf72edc6.jpg", "alt": "Camp 2019 Photo 14", "size": "large" }
        ]
    },
    {
        "id": "buraq-2018",
        "year": "2018",
        "title": "2018",
        "coverImage": "/images/gallery/2018/buraqCover2018.png",
        
        "highlight": "Camp 2018 Adventures",
        "videoLink": "https://www.youtube.com/embed/jH6u7i3Tu_8",
        "aboutCamp": {
            "heading": "MASTERY IN MOTION",
            "paragraph": "2018 wasn't about proving anything. It was about becoming. The camp had reached a point where every mission, every lecture, every sleepless night was part of something bigger: transformation. Cadets forged a bond that only those inside the circle could truly understand."
        },
        "values": ["Reflection" , "Emotional Intelligence" , "Curiosity"],
        "photos": [
            { "id": "1", "src": "/images/gallery/2018/buraqCover2018.png", "alt": "Camp 2018 Cover", "size": "banner" },
            { "id": "2", "src": "/images/gallery/2018/Copy of 01a5b591-283a-423a-8cdf-4e1c401bdaf3.jpg", "alt": "Camp 2018 Photo 1", "size": "large" },
            { "id": "3", "src": "/images/gallery/2018/Copy of 0301ebe4-9a6c-4beb-ae89-7102de6e9cdc.jpg", "alt": "Camp 2018 Photo 2", "size": "medium" },
            { "id": "4", "src": "/images/gallery/2018/Copy of 0a7eeca4-7d0b-4441-acda-165da377ba77.jpg", "alt": "Camp 2018 Photo 3", "size": "small" },
            { "id": "5", "src": "/images/gallery/2018/Copy of 3fdadeed-d49b-4ee5-b39f-c0842e5c110f.jpg", "alt": "Camp 2018 Photo 4", "size": "medium" },
            { "id": "6", "src": "/images/gallery/2018/Copy of 6c9c8173-acb2-423d-a1ee-68ad6a76de35.jpg", "alt": "Camp 2018 Photo 5", "size": "large" },
            { "id": "7", "src": "/images/gallery/2018/Copy of 78235590-875e-4da0-a835-16c87261dd1c.jpg", "alt": "Camp 2018 Photo 6", "size": "small" },
            { "id": "8", "src": "/images/gallery/2018/Copy of Copy of 49324197_342696652995273_2980820720625385472_n.jpg", "alt": "Camp 2018 Photo 7", "size": "medium" },
            { "id": "9", "src": "/images/gallery/2018/Copy of Copy of 49389709_342694952995443_2522360050136121344_n.jpg", "alt": "Camp 2018 Photo 8", "size": "large" },
            { "id": "10", "src": "/images/gallery/2018/Copy of Copy of 50051925_342696132995325_7984942165790818304_n.jpg", "alt": "Camp 2018 Photo 9", "size": "small" },
            { "id": "11", "src": "/images/gallery/2018/Copy of Copy of 50084414_342696062995332_6990402764249497600_n.jpg", "alt": "Camp 2018 Photo 10", "size": "medium" },
            { "id": "12", "src": "/images/gallery/2018/Copy of Copy of 50110017_342696356328636_1456030021134057472_n.jpg", "alt": "Camp 2018 Photo 11", "size": "large" },
            { "id": "13", "src": "/images/gallery/2018/Copy of Copy of 50241591_342693612995577_2866047649604173824_n.jpg", "alt": "Camp 2018 Photo 12", "size": "small" },
            { "id": "14", "src": "/images/gallery/2018/Copy of Copy of 50304687_342693602995578_1555839739628617728_n.jpg", "alt": "Camp 2018 Photo 13", "size": "medium" },
            { "id": "15", "src": "/images/gallery/2018/Copy of Copy of 50428465_342695169662088_13702685135994880_n.jpg", "alt": "Camp 2018 Photo 14", "size": "large" },
            { "id": "16", "src": "/images/gallery/2018/Copy of b8300e6b-b3b7-4f52-9fc7-08287b21cd0f.jpg", "alt": "Camp 2018 Photo 15", "size": "small" },
            { "id": "17", "src": "/images/gallery/2018/Copy of cba654b8-f415-4861-80ae-0e3c20627494.jpg", "alt": "Camp 2018 Photo 16", "size": "medium" },
            { "id": "18", "src": "/images/gallery/2018/Copy of dbfc8046-37e1-4d22-a3af-fc06cb1885bd.jpg", "alt": "Camp 2018 Photo 17", "size": "large" },
            { "id": "19", "src": "/images/gallery/2018/Copy of e51a377d-4955-4e30-8a3e-fdef561356f0.jpg", "alt": "Camp 2018 Photo 18", "size": "small" }
        ]
    },
    {
        "id": "buraq-2017",
        "year": "2017",
        "title": "2017",
        "coverImage": "/images/gallery/2017/buraqCover2017.png",
        "highlight": "Camp 2017 Adventures",
        "videoLink": "https://www.youtube.com/embed/lJqXOxtZ0w8",
        "aboutCamp": {
            "heading": "AT THE WORLD STAGE",
            "paragraph": "In 2017, Buraq’s impact crossed borders. Three Buraqians represented Pakistan at the prestigious Eisenhower Youth Conference in Spain — the only delegates from the country. It wasn’t just an achievement; it was a statement. "
        },
        "values": ["Ambassadorship "," Cultural Intelligence ","Professionalism"],
        "photos": [
            { "id": "1", "src": "/images/gallery/2017/buraqCover2017.png", "alt": "Camp 2017 Cover", "size": "banner" },
            { "id": "2", "src": "/images/gallery/2017/Copy of Copy of 468712819_10170837728750377_3258419468686288474_n.jpg", "alt": "Camp 2017 Photo 1", "size": "large" },
            { "id": "3", "src": "/images/gallery/2017/Copy of Copy of 468714268_10170837730680377_890330305375351584_n.jpg", "alt": "Camp 2017 Photo 2", "size": "medium" },
            { "id": "4", "src": "/images/gallery/2017/Copy of Copy of 468731431_10170837728765377_9117777221681740014_n.jpg", "alt": "Camp 2017 Photo 3", "size": "small" },
            { "id": "5", "src": "/images/gallery/2017/Copy of Copy of 468744284_10170837726685377_3407967198086159711_n.jpg", "alt": "Camp 2017 Photo 4", "size": "medium" },
            { "id": "6", "src": "/images/gallery/2017/Copy of Copy of 468818895_10170837726690377_4784439498120584592_n.jpg", "alt": "Camp 2017 Photo 5", "size": "large" },
            { "id": "7", "src": "/images/gallery/2017/Copy of Copy of 471662635_10171404910640377_6967289922496555172_n.jpg", "alt": "Camp 2017 Photo 6", "size": "small" },
            { "id": "8", "src": "/images/gallery/2017/Copy of IMG_8379.JPG", "alt": "Camp 2017 Photo 7", "size": "medium" },
            { "id": "9", "src": "/images/gallery/2017/Copy of IMG_8380.JPG", "alt": "Camp 2017 Photo 8", "size": "large" },
            { "id": "10", "src": "/images/gallery/2017/Copy of IMG_8381.JPG", "alt": "Camp 2017 Photo 9", "size": "small" },
            { "id": "11", "src": "/images/gallery/2017/Copy of IMG_8382.JPG", "alt": "Camp 2017 Photo 10", "size": "medium" },
            { "id": "12", "src": "/images/gallery/2017/Copy of IMG_8383.JPG", "alt": "Camp 2017 Photo 11", "size": "large" },
            { "id": "13", "src": "/images/gallery/2017/Copy of IMG_8384.JPG", "alt": "Camp 2017 Photo 12", "size": "small" },
            { "id": "14", "src": "/images/gallery/2017/Copy of IMG_8385.JPG", "alt": "Camp 2017 Photo 13", "size": "medium" },
            { "id": "15", "src": "/images/gallery/2017/Copy of IMG_8386.JPG", "alt": "Camp 2017 Photo 14", "size": "large" },
            { "id": "16", "src": "/images/gallery/2017/Copy of IMG_8387.JPG", "alt": "Camp 2017 Photo 15", "size": "small" },
            { "id": "17", "src": "/images/gallery/2017/Copy of IMG_8388.JPG", "alt": "Camp 2017 Photo 16", "size": "medium" }
        ]
    },
    {
        "id": "buraq-2016",
        "year": "2016",
        "title": "2016",
        "coverImage": "/images/gallery/2016/buraqCover2016.png",
        "highlight": "Camp 2016 Adventures",
        "videoLink": "https://www.youtube.com/embed/9jZSAu2LWvY",
        "aboutCamp": {
            "heading": "TO BE A BURAQIAN",
            "paragraph": "Buraq had become a closely woven network of individuals that extended far beyond camp, bound by shared struggle, discipline, and purpose. Entry wasn’t just earned — it was remembered. To be a Buraqian was to walk with quiet confidence. Not because of prestige, but because of purpose. The influence wasn’t loud, but it was everywhere."
        },
        "values": ["Connection "," Mentorship "," Inclusivity"],
        "photos": [
            { "id": "1", "src": "/images/gallery/2016/buraqCover2016.png", "alt": "Camp 2016 Cover", "size": "banner" },
            { "id": "2", "src": "/images/gallery/2016/Copy of Copy of 472039790_10171426266815377_5451025411442873208_n.jpg", "alt": "Camp 2016 Photo 1", "size": "large" },
            { "id": "3", "src": "/images/gallery/2016/Copy of IMG_8389.JPG", "alt": "Camp 2016 Photo 2", "size": "medium" },
            { "id": "4", "src": "/images/gallery/2016/Copy of IMG_8390.JPG", "alt": "Camp 2016 Photo 3", "size": "small" },
            { "id": "5", "src": "/images/gallery/2016/Copy of IMG_8391.JPG", "alt": "Camp 2016 Photo 4", "size": "medium" },
            { "id": "6", "src": "/images/gallery/2016/Copy of IMG_8392.JPG", "alt": "Camp 2016 Photo 5", "size": "large" },
            { "id": "7", "src": "/images/gallery/2016/Copy of IMG_8393.JPG", "alt": "Camp 2016 Photo 6", "size": "small" },
            { "id": "8", "src": "/images/gallery/2016/Copy of IMG_8394.JPG", "alt": "Camp 2016 Photo 7", "size": "medium" },
            { "id": "9", "src": "/images/gallery/2016/Copy of IMG_8395.JPG", "alt": "Camp 2016 Photo 8", "size": "large" },
            { "id": "10", "src": "/images/gallery/2016/Copy of IMG_8396.JPG", "alt": "Camp 2016 Photo 9", "size": "small" },
            { "id": "11", "src": "/images/gallery/2016/Copy of IMG_8397.JPG", "alt": "Camp 2016 Photo 10", "size": "medium" },
            { "id": "12", "src": "/images/gallery/2016/Copy of IMG_8398.JPG", "alt": "Camp 2016 Photo 11", "size": "large" }
        ]
    },
    {
        "id": "buraq-2015",
        "year": "2015",
        "title": "2015",
        "coverImage": "/images/gallery/2015/buraqCover2015.png",
        "highlight": "Camp 2015 Adventures",
        "videoLink": "https://www.youtube.com/embed/fJXGnMVJnQ0",
        "aboutCamp": {
            "heading": "THE CREST OF CREDIBILITY",
            "paragraph": "By 2015, Buraq had become more than a camp — it was a benchmark. Known for its discipline, depth, and unshakable values, Buraq earned quiet reverence. By 2015, Buraq was no longer just remembered- it was respected. "
        },
        "values": ["Respect"," Tradition "," Leadership by Example"],
        "photos": [
            { "id": "1", "src": "/images/gallery/2015/buraqCover2015.png", "alt": "Camp 2015 Cover", "size": "banner" },
            { "id": "2", "src": "/images/gallery/2015/Copy of IMG_8401.JPG", "alt": "Camp 2015 Photo 1", "size": "large" },
            { "id": "3", "src": "/images/gallery/2015/Copy of IMG_8402.JPG", "alt": "Camp 2015 Photo 2", "size": "medium" },
            { "id": "4", "src": "/images/gallery/2015/Copy of IMG_8403.JPG", "alt": "Camp 2015 Photo 3", "size": "small" },
            { "id": "5", "src": "/images/gallery/2015/Copy of IMG_8404.JPG", "alt": "Camp 2015 Photo 4", "size": "medium" },
            { "id": "6", "src": "/images/gallery/2015/Copy of IMG_8405.JPG", "alt": "Camp 2015 Photo 5", "size": "large" },
            { "id": "7", "src": "/images/gallery/2015/Copy of IMG_8406.JPG", "alt": "Camp 2015 Photo 6", "size": "small" },
            { "id": "8", "src": "/images/gallery/2015/Copy of IMG_8407.JPG", "alt": "Camp 2015 Photo 7", "size": "medium" },
            { "id": "9", "src": "/images/gallery/2015/Copy of IMG_8408.JPG", "alt": "Camp 2015 Photo 8", "size": "large" },
            { "id": "10", "src": "/images/gallery/2015/Copy of IMG_8409.JPG", "alt": "Camp 2015 Photo 9", "size": "small" },
            { "id": "11", "src": "/images/gallery/2015/Copy of IMG_8410.JPG", "alt": "Camp 2015 Photo 10", "size": "medium" }
        ]
    },
    {
        "id": "buraq-2014",
        "year": "2014",
        "title": "2014",
        "coverImage": "/images/gallery/2014/buraqCover2014.png",
        "highlight": "Camp 2014 Adventures",
        "aboutCamp": {
            "heading": "FOUNDATIONS OF EXCELLENCE",
            "paragraph": "By 2014, Buraq had regained its rhythm — and the world was starting to take notice. The systems were sharper, the mentors more seasoned, and the expectations higher. Cadets entered knowing they were part of something rare — a space where pressure met purpose, and excellence was the norm."
        },
        "values": ["Articulation "," Confidence "," Empathy"],
        "photos": [
            { "id": "1", "src": "/images/gallery/2014/buraqCover2014.png", "alt": "Camp 2014 Cover", "size": "banner" },
            { "id": "2", "src": "/images/gallery/2014/Copy of Copy of 472827764_10171616348330377_2654922998636600201_n.jpg", "alt": "Camp 2014 Photo 1", "size": "large" },
            { "id": "3", "src": "/images/gallery/2014/Copy of Copy of 473548716_10171616332175377_2631845168101742908_n.jpg", "alt": "Camp 2014 Photo 2", "size": "medium" },
            { "id": "4", "src": "/images/gallery/2014/Copy of Copy of 473599831_10171616407060377_8001494645511373804_n.jpg", "alt": "Camp 2014 Photo 3", "size": "small" },
            { "id": "5", "src": "/images/gallery/2014/Copy of Copy of 473614241_10171616831910377_4628869096600166118_n.jpg", "alt": "Camp 2014 Photo 4", "size": "medium" },
            { "id": "6", "src": "/images/gallery/2014/Copy of Copy of 473636132_10171616821225377_307498775854561138_n.jpg", "alt": "Camp 2014 Photo 5", "size": "large" },
            { "id": "7", "src": "/images/gallery/2014/Copy of IMG_8389.JPG", "alt": "Camp 2014 Photo 6", "size": "small" },
            { "id": "8", "src": "/images/gallery/2014/Copy of IMG_8390.JPG", "alt": "Camp 2014 Photo 7", "size": "medium" },
            { "id": "9", "src": "/images/gallery/2014/Copy of IMG_8391.JPG", "alt": "Camp 2014 Photo 8", "size": "large" },
            { "id": "10", "src": "/images/gallery/2014/Copy of IMG_8392.JPG", "alt": "Camp 2014 Photo 9", "size": "small" },
            { "id": "11", "src": "/images/gallery/2014/Copy of IMG_8393.JPG", "alt": "Camp 2014 Photo 10", "size": "medium" },
            { "id": "12", "src": "/images/gallery/2014/Copy of IMG_8394.JPG", "alt": "Camp 2014 Photo 11", "size": "large" },
            { "id": "13", "src": "/images/gallery/2014/Copy of IMG_8395.JPG", "alt": "Camp 2014 Photo 12", "size": "small" },
            { "id": "14", "src": "/images/gallery/2014/Copy of IMG_8396.JPG", "alt": "Camp 2014 Photo 13", "size": "medium" },
            { "id": "15", "src": "/images/gallery/2014/Copy of IMG_8397.JPG", "alt": "Camp 2014 Photo 14", "size": "large" },
            { "id": "16", "src": "/images/gallery/2014/Copy of IMG_8398.JPG", "alt": "Camp 2014 Photo 15", "size": "small" },
            { "id": "17", "src": "/images/gallery/2014/Copy of IMG_8411.JPG", "alt": "Camp 2014 Photo 16", "size": "medium" },
            { "id": "18", "src": "/images/gallery/2014/Copy of IMG_8412.JPG", "alt": "Camp 2014 Photo 17", "size": "large" },
            { "id": "19", "src": "/images/gallery/2014/Copy of IMG_8413.JPG", "alt": "Camp 2014 Photo 18", "size": "small" },
            { "id": "20", "src": "/images/gallery/2014/Copy of IMG_8414.JPG", "alt": "Camp 2014 Photo 19", "size": "medium" },
            { "id": "21", "src": "/images/gallery/2014/Copy of IMG_8415.JPG", "alt": "Camp 2014 Photo 20", "size": "large" },
            { "id": "22", "src": "/images/gallery/2014/Copy of IMG_8416.JPG", "alt": "Camp 2014 Photo 21", "size": "small" },
            { "id": "23", "src": "/images/gallery/2014/Copy of IMG_8417.JPG", "alt": "Camp 2014 Photo 22", "size": "medium" },
            { "id": "24", "src": "/images/gallery/2014/Copy of IMG_8418.JPG", "alt": "Camp 2014 Photo 23", "size": "large" },
            { "id": "25", "src": "/images/gallery/2014/Copy of IMG_8419.JPG", "alt": "Camp 2014 Photo 24", "size": "small" },
            { "id": "26", "src": "/images/gallery/2014/Copy of IMG_8420.JPG", "alt": "Camp 2014 Photo 25", "size": "medium" },
            { "id": "27", "src": "/images/gallery/2014/Copy of IMG_8421.JPG", "alt": "Camp 2014 Photo 26", "size": "large" }
        ]
    },
    {
        "id": "buraq-2013",
        "year": "2013",
        "title": "2013",
        "coverImage": "/images/gallery/2013/buraqCover2013.png",
        "highlight": "Camp 2013 Adventures",
        "videoLink": "https://www.youtube.com/embed/fe0K53fqEvE",
        "aboutCamp": {
            "heading": "THE ASCENT",
            "paragraph": "With its revival still fresh, the 2013 camp marked a turning point. Systems became smoother, the curriculum more refined, and the energy stronger than ever. New cadets stepped into a legacy reborn, while returning alumni solidified a culture of mentorship and meaning. Buraq was no longer rebuilding- it was rising."
        },
        "values": ["Initiative "," Critical Thinking","Accountability"],
        "photos": [
            { "id": "1", "src": "/images/gallery/2013/buraqCover2013.png", "alt": "Camp 2013 Cover", "size": "banner" },
            { "id": "2", "src": "/images/gallery/2013/Copy of Copy of 468213660_10170749112515377_8323350168864377816_n.jpg", "alt": "Camp 2013 Photo 1", "size": "large" },
            { "id": "3", "src": "/images/gallery/2013/Copy of Copy of 468297406_10170749112555377_2269070581328121206_n.jpg", "alt": "Camp 2013 Photo 2", "size": "medium" },
            { "id": "4", "src": "/images/gallery/2013/Copy of Copy of 468297697_10170749100470377_5466329431582483179_n.jpg", "alt": "Camp 2013 Photo 3", "size": "small" },
            { "id": "5", "src": "/images/gallery/2013/Copy of Copy of 468309582_10170749112525377_7602033279225432060_n.jpg", "alt": "Camp 2013 Photo 4", "size": "medium" },
            { "id": "6", "src": "/images/gallery/2013/Copy of Copy of 468325203_10170749112535377_6292366329626594968_n.jpg", "alt": "Camp 2013 Photo 5", "size": "large" },
            { "id": "7", "src": "/images/gallery/2013/Copy of Copy of 468325839_10170749110370377_3348771564425991294_n.jpg", "alt": "Camp 2013 Photo 6", "size": "small" },
            { "id": "8", "src": "/images/gallery/2013/Copy of Copy of 468326169_10170749111665377_1621415854369832741_n.jpg", "alt": "Camp 2013 Photo 7", "size": "medium" },
            { "id": "9", "src": "/images/gallery/2013/Copy of Copy of 468353382_10170749100490377_5905689409161118976_n.jpg", "alt": "Camp 2013 Photo 8", "size": "large" },
            { "id": "10", "src": "/images/gallery/2013/Copy of Copy of 468408166_10170749113245377_984497976681678481_n.jpg", "alt": "Camp 2013 Photo 9", "size": "small" },
            { "id": "11", "src": "/images/gallery/2013/Copy of Copy of 468408797_10170749094140377_7515055661034458013_n.jpg", "alt": "Camp 2013 Photo 10", "size": "medium" },
            { "id": "12", "src": "/images/gallery/2013/Copy of Copy of 468423730_10170749093685377_7835506290624522126_n.jpg", "alt": "Camp 2013 Photo 11", "size": "large" },
            { "id": "13", "src": "/images/gallery/2013/Copy of Copy of 468501757_10170749112540377_8484000008388618915_n.jpg", "alt": "Camp 2013 Photo 12", "size": "small" },
            { "id": "14", "src": "/images/gallery/2013/Copy of Copy of 468642957_10170829056295377_7114365871079731470_n.jpg", "alt": "Camp 2013 Photo 13", "size": "medium" },
            { "id": "15", "src": "/images/gallery/2013/Copy of Copy of 468832401_10170829061860377_5611786671496566763_n.jpg", "alt": "Camp 2013 Photo 14", "size": "large" },
            { "id": "16", "src": "/images/gallery/2013/Copy of IMG_8422.JPG", "alt": "Camp 2013 Photo 15", "size": "small" },
            { "id": "17", "src": "/images/gallery/2013/Copy of IMG_8423.JPG", "alt": "Camp 2013 Photo 16", "size": "medium" },
            { "id": "18", "src": "/images/gallery/2013/Copy of IMG_8424.JPG", "alt": "Camp 2013 Photo 17", "size": "large" },
            { "id": "19", "src": "/images/gallery/2013/Copy of IMG_8425.JPG", "alt": "Camp 2013 Photo 18", "size": "small" },
            { "id": "20", "src": "/images/gallery/2013/Copy of IMG_8426.JPG", "alt": "Camp 2013 Photo 19", "size": "medium" },
            { "id": "21", "src": "/images/gallery/2013/Copy of IMG_8427.JPG", "alt": "Camp 2013 Photo 20", "size": "large" },
            { "id": "22", "src": "/images/gallery/2013/Copy of IMG_8428.JPG", "alt": "Camp 2013 Photo 21", "size": "small" },
            { "id": "23", "src": "/images/gallery/2013/Copy of IMG_8429.JPG", "alt": "Camp 2013 Photo 22", "size": "medium" },
            { "id": "24", "src": "/images/gallery/2013/Copy of IMG_8430.JPG", "alt": "Camp 2013 Photo 23", "size": "large" },
            { "id": "25", "src": "/images/gallery/2013/Copy of IMG_8431.JPG", "alt": "Camp 2013 Photo 24", "size": "small" }
        ]
    },
    {
        "id": "buraq-2012",
        "year": "2012",
        "title": "2012",
        "coverImage": "/images/gallery/2012/buraqCover2012.png",
        "highlight": "Camp 2012 Adventures",
        "videoLink": "https://www.youtube.com/embed/U5uCFzOgQxw",
        "aboutCamp": {
            "heading": "THE RETURN OF BURAQ",
            "paragraph": "After nearly a decade of silence, 2012 marked a powerful rebirth. Revived by Anushay Mahmud, Buraq returned not just as a camp but as a reignited legacy, a force for youth transformation. Alumni who once wore the cadet suit came back as mentors, pouring their experiences into shaping something even greater. The spirit of competition gave way to collaboration. Space and science remained, but were now joined by leadership, innovation, and real-world learning. Former cadets became mentors. The mission was deeper, the purpose clearer."
        },
        "values": ["Innovation "," Team Spirit "," Service"],
        "photos": [
            { "id": "1", "src": "/images/gallery/2012/buraqCover2012.png", "alt": "Camp 2012 Cover", "size": "banner" },
            { "id": "2", "src": "/images/gallery/2012/Copy of 471580132_10171548852315377_2336427915736921965_n.jpg", "alt": "Camp 2012 Photo 1", "size": "large" },
            { "id": "3", "src": "/images/gallery/2012/Copy of 472402437_10171548926865377_1532988613827507920_n.jpg", "alt": "Camp 2012 Photo 2", "size": "medium" },
            { "id": "4", "src": "/images/gallery/2012/Copy of 472439823_10171534212140377_8737201599749046934_n.jpg", "alt": "Camp 2012 Photo 3", "size": "small" },
            { "id": "5", "src": "/images/gallery/2012/Copy of 472477275_10171548933780377_8193781406575135759_n.jpg", "alt": "Camp 2012 Photo 4", "size": "medium" },
            { "id": "6", "src": "/images/gallery/2012/Copy of 472546239_10171548935465377_211172298353108249_n.jpg", "alt": "Camp 2012 Photo 5", "size": "large" },
            { "id": "7", "src": "/images/gallery/2012/Copy of 472576347_10171548916855377_6060050631477338035_n.jpg", "alt": "Camp 2012 Photo 6", "size": "small" },
            { "id": "8", "src": "/images/gallery/2012/Copy of 472666269_10171548850845377_6737165803780850092_n.jpg", "alt": "Camp 2012 Photo 7", "size": "medium" },
            { "id": "9", "src": "/images/gallery/2012/Copy of 472666553_10171534322065377_494950909078458202_n.jpg", "alt": "Camp 2012 Photo 8", "size": "large" },
            { "id": "10", "src": "/images/gallery/2012/Copy of 472671260_10171548868555377_3281830411228399537_n.jpg", "alt": "Camp 2012 Photo 9", "size": "small" },
            { "id": "11", "src": "/images/gallery/2012/Copy of 472683465_10171548927680377_8655258862058628440_n.jpg", "alt": "Camp 2012 Photo 10", "size": "medium" },
            { "id": "12", "src": "/images/gallery/2012/Copy of 472710857_10171548915650377_8163615391405338778_n.jpg", "alt": "Camp 2012 Photo 11", "size": "large" },
            { "id": "13", "src": "/images/gallery/2012/Copy of 472712763_10171548906560377_3816143246141280585_n.jpg", "alt": "Camp 2012 Photo 12", "size": "small" },
            { "id": "14", "src": "/images/gallery/2012/Copy of 472717321_10171548902965377_8190714585098925079_n.jpg", "alt": "Camp 2012 Photo 13", "size": "medium" },
            { "id": "15", "src": "/images/gallery/2012/Copy of 472718158_10171533065630377_6312584551426880231_n.jpg", "alt": "Camp 2012 Photo 14", "size": "large" },
            { "id": "16", "src": "/images/gallery/2012/Copy of 472727214_10171548884170377_5272156239218601000_n.jpg", "alt": "Camp 2012 Photo 15", "size": "small" },
            { "id": "17", "src": "/images/gallery/2012/Copy of 472727331_10171548928030377_9164852729886005175_n.jpg", "alt": "Camp 2012 Photo 16", "size": "medium" },
            { "id": "18", "src": "/images/gallery/2012/Copy of 472739556_10171548919400377_7490445239992687755_n.jpg", "alt": "Camp 2012 Photo 17", "size": "large" },
            { "id": "19", "src": "/images/gallery/2012/Copy of 472757209_10171548927145377_6368830672695132614_n.jpg", "alt": "Camp 2012 Photo 18", "size": "small" },
            { "id": "20", "src": "/images/gallery/2012/Copy of 472780502_10171548899855377_7294721521352331643_n.jpg", "alt": "Camp 2012 Photo 19", "size": "medium" },
            { "id": "21", "src": "/images/gallery/2012/Copy of 472784846_10171548878435377_5483855324586493981_n.jpg", "alt": "Camp 2012 Photo 20", "size": "large" },
            { "id": "22", "src": "/images/gallery/2012/Copy of 472787432_10171548898975377_5154657128641886873_n.jpg", "alt": "Camp 2012 Photo 21", "size": "small" },
            { "id": "23", "src": "/images/gallery/2012/Copy of 472787918_10171532996675377_7430636900457775731_n.jpg", "alt": "Camp 2012 Photo 22", "size": "medium" },
            { "id": "24", "src": "/images/gallery/2012/Copy of 472796533_10171548897980377_8531286734078730572_n.jpg", "alt": "Camp 2012 Photo 23", "size": "large" },
            { "id": "25", "src": "/images/gallery/2012/Copy of 472799067_10171548901335377_23212316748421012_n.jpg", "alt": "Camp 2012 Photo 24", "size": "small" },
            { "id": "26", "src": "/images/gallery/2012/Copy of 472809690_10171548896925377_2140182341996280388_n.jpg", "alt": "Camp 2012 Photo 25", "size": "medium" },
            { "id": "27", "src": "/images/gallery/2012/Copy of 472909736_10171548936420377_4390525450455362771_n.jpg", "alt": "Camp 2012 Photo 26", "size": "large" },
            { "id": "28", "src": "/images/gallery/2012/Copy of 472968077_10171534212350377_6281623643639922431_n.jpg", "alt": "Camp 2012 Photo 27", "size": "small" },
            { "id": "29", "src": "/images/gallery/2012/Copy of IMG_8432.JPG", "alt": "Camp 2012 Photo 28", "size": "medium" },
            { "id": "30", "src": "/images/gallery/2012/Copy of IMG_8433.JPG", "alt": "Camp 2012 Photo 29", "size": "large" },
            { "id": "31", "src": "/images/gallery/2012/Copy of IMG_8434.JPG", "alt": "Camp 2012 Photo 30", "size": "small" },
            { "id": "32", "src": "/images/gallery/2012/Copy of IMG_8435.JPG", "alt": "Camp 2012 Photo 31", "size": "medium" },
            { "id": "33", "src": "/images/gallery/2012/Copy of IMG_8436.JPG", "alt": "Camp 2012 Photo 32", "size": "large" },
            { "id": "34", "src": "/images/gallery/2012/Copy of IMG_8437.JPG", "alt": "Camp 2012 Photo 33", "size": "small" }
        ]
    },
    {
        id: 'buraq-2003',
        year: '2003',
        title: '2003',
        coverImage: '/images/gallery/2003/buraqCover2003.png',
        highlight: 'Camp 2003 Adventures',
        aboutCamp: {
            heading: 'A GROWING LEGACY',
            paragraph: 'By 2003, Buraq had begun to establish itself as more than just a camp — it was becoming a tradition. With each passing year, the program refined its structure, deepened its impact, and continued to shape a generation of curious, disciplined, and driven young individuals. The growing recognition attracted national figures, with renowned personalities like Imran Khan visiting the camp to speak, inspire, and spend time with cadets — a clear sign that Buraq’s mission was resonating far beyond its tents.'
        },
        values: ["Integrity "," Public Presence", "Confidence"],
        photos: [
            { id: '1', src: '/images/gallery/2003/buraqCover2003.png', alt: 'Camp 2003 Cover', size: 'banner' },
            { id: '2', src: '/images/gallery/2003/516857455_10162593511556893_2300815469294357264_n.jpg', alt: 'Camp 2003 Photo 1', size: 'large' },
            { id: '3', src: '/images/gallery/2003/517461286_10162593511521893_8212549689631196148_n.jpg', alt: 'Camp 2003 Photo 2', size: 'medium' },
            { id: '4', src: '/images/gallery/2003/517481254_10162593511401893_1113249711758247723_n.jpg', alt: 'Camp 2003 Photo 3', size: 'small' },
            { id: '5', src: '/images/gallery/2003/517653665_10162593511516893_1772579834480523017_n.jpg', alt: 'Camp 2003 Photo 4', size: 'medium' },
            { id: '6', src: '/images/gallery/2003/518021630_10162593511361893_4387702304856277372_n.jpg', alt: 'Camp 2003 Photo 5', size: 'large' },
            { id: '7', src: '/images/gallery/2003/518090870_10162593511741893_2996651080703405103_n.jpg', alt: 'Camp 2003 Photo 6', size: 'small' },
            { id: '8', src: '/images/gallery/2003/518272992_10162593511171893_2963729606341829603_n.jpg', alt: 'Camp 2003 Photo 7', size: 'medium' },
            { id: '9', src: '/images/gallery/2003/518274485_10162593511561893_480218886020545613_n.jpg', alt: 'Camp 2003 Photo 8', size: 'large' },
            { id: '10', src: '/images/gallery/2003/518301842_10162593511431893_1146589017761825706_n.jpg', alt: 'Camp 2003 Photo 9', size: 'small' },
            { id: '11', src: '/images/gallery/2003/518307411_10162593511586893_8480383256592762859_n.jpg', alt: 'Camp 2003 Photo 10', size: 'medium' },
            { id: '12', src: '/images/gallery/2003/518338955_10162593511111893_2227067802464548171_n.jpg', alt: 'Camp 2003 Photo 11', size: 'large' },
            { id: '13', src: '/images/gallery/2003/81176274_535734767024793_3133247439218147328_n.jpg', alt: 'Camp 2003 Photo 12', size: 'small' },
            { id: '14', src: '/images/gallery/2003/81384912_535734973691439_2381514032252190720_n.jpg', alt: 'Camp 2003 Photo 13', size: 'medium' },
            { id: '15', src: '/images/gallery/2003/81742036_535734953691441_8577694914458943488_n.jpg', alt: 'Camp 2003 Photo 14', size: 'large' },
            { id: '16', src: '/images/gallery/2003/81870318_535734827024787_7516515453187915776_n.jpg', alt: 'Camp 2003 Photo 15', size: 'small' },
            { id: '17', src: '/images/gallery/2003/81942982_535734793691457_8386162342542442496_n.jpg', alt: 'Camp 2003 Photo 16', size: 'medium' },
            { id: '18', src: '/images/gallery/2003/Copy of IMG_8438.JPG', alt: 'Camp 2003 Photo 17', size: 'large' },
            { id: '19', src: '/images/gallery/2003/Copy of IMG_8439.JPG', alt: 'Camp 2003 Photo 18', size: 'small' },
            { id: '20', src: '/images/gallery/2003/Copy of IMG_8440.JPG', alt: 'Camp 2003 Photo 19', size: 'medium' },
            { id: '21', src: '/images/gallery/2003/Copy of IMG_8441.JPG', alt: 'Camp 2003 Photo 20', size: 'large' },
            { id: '22', src: '/images/gallery/2003/Copy of IMG_8442.JPG', alt: 'Camp 2003 Photo 21', size: 'small' },
            { id: '23', src: '/images/gallery/2003/Copy of IMG_8443.JPG', alt: 'Camp 2003 Photo 22', size: 'medium' },
            { id: '24', src: '/images/gallery/2003/Copy of IMG_8444.JPG', alt: 'Camp 2003 Photo 23', size: 'large' },
            { id: '25', src: '/images/gallery/2003/Copy of IMG_8445.JPG', alt: 'Camp 2003 Photo 24', size: 'small' },
            { id: '26', src: '/images/gallery/2003/Copy of IMG_8446.JPG', alt: 'Camp 2003 Photo 25', size: 'medium' },
            { id: '27', src: '/images/gallery/2003/Copy of IMG_8447.JPG', alt: 'Camp 2003 Photo 26', size: 'large' }
        ]
    },
    {
        id: 'buraq-2002',
        year: '2002',
        title: '2002',
        coverImage: '/images/gallery/2002/buraqCover2002.png',
        highlight: 'Camp 2002 Adventures',
        aboutCamp: {
            heading: 'CARRYING THE TORCH',
            paragraph: 'The 2002 camp continued Buraq’s mission of challenging young minds through immersive learning, teamwork, and leadership. With a new batch of cadets and returning mentors, the spirit of exploration remained strong- proving that the Buraq experience was now firmly taking root.'
        },
        values: ['Self-discipline ',' Commitment ',' Humility'],
        photos: [
            { id: '1', src: '/images/gallery/2002/buraqCover2002.png', alt: 'Camp 2002 Cover', size: 'banner' },
            { id: '2', src: '/images/gallery/2002/Copy of IMG_8448.JPG', alt: 'Camp 2002 Photo 1', size: 'large' },
            { id: '3', src: '/images/gallery/2002/Copy of IMG_8449.JPG', alt: 'Camp 2002 Photo 2', size: 'medium' },
            { id: '4', src: '/images/gallery/2002/Copy of IMG_8451.JPG', alt: 'Camp 2002 Photo 3', size: 'small' },
            { id: '5', src: '/images/gallery/2002/Copy of IMG_8452.JPG', alt: 'Camp 2002 Photo 4', size: 'medium' },
            { id: '6', src: '/images/gallery/2002/Copy of IMG_8453.JPG', alt: 'Camp 2002 Photo 5', size: 'large' },
            { id: '7', src: '/images/gallery/2002/Copy of IMG_8454.JPG', alt: 'Camp 2002 Photo 6', size: 'small' },
            { id: '8', src: '/images/gallery/2002/Copy of IMG_8456.JPG', alt: 'Camp 2002 Photo 7', size: 'medium' },
            { id: '9', src: '/images/gallery/2002/Copy of IMG_8457.JPG', alt: 'Camp 2002 Photo 8', size: 'large' },
            { id: '10', src: '/images/gallery/2002/Copy of IMG_8458.JPG', alt: 'Camp 2002 Photo 9', size: 'small' },
            { id: '11', src: '/images/gallery/2002/Copy of IMG_8459.JPG', alt: 'Camp 2002 Photo 10', size: 'medium' }
        ]
    },
    {
        id: 'buraq-2001',
        year: '2001',
        title: '2001',
        coverImage: '/images/gallery/2001/buraqCover2001.png',
        highlight: 'Camp 2001 Adventures',
        aboutCamp: {
            heading: 'THE COLD THAT TAUGH ',
            paragraph: 'To truly understand the concept of fragility- not from textbooks, but through lived experience- one had to stand beneath a canopy of stars, breath visible in the freezing December air, surrounded by silence at the Buraq Space Camp. In 2001, Buraq returned to the cold, where its lessons hit deeper and its spirit felt alive once more.'
        },
        values: ['Perseverance ',' Conviction ',' Respect for Process'],
        photos: [
            { id: '1', src: '/images/gallery/2001/buraqCover2001.png', alt: 'Camp 2001 Cover', size: 'banner' },
            { id: '2', src: '/images/gallery/2001/Copy of IMG_8460.JPG', alt: 'Camp 2001 Photo 1', size: 'large' },
            { id: '3', src: '/images/gallery/2001/Copy of IMG_8461.JPG', alt: 'Camp 2001 Photo 2', size: 'medium' },
            { id: '4', src: '/images/gallery/2001/Copy of IMG_8462.JPG', alt: 'Camp 2001 Photo 3', size: 'small' },
            { id: '5', src: '/images/gallery/2001/Copy of IMG_8463.JPG', alt: 'Camp 2001 Photo 4', size: 'medium' },
            { id: '6', src: '/images/gallery/2001/Copy of IMG_8464.JPG', alt: 'Camp 2001 Photo 5', size: 'large' },
            { id: '7', src: '/images/gallery/2001/Copy of IMG_8465.JPG', alt: 'Camp 2001 Photo 6', size: 'small' },
            { id: '8', src: '/images/gallery/2001/Copy of IMG_8466.JPG', alt: 'Camp 2001 Photo 7', size: 'medium' },
            { id: '9', src: '/images/gallery/2001/Copy of IMG_8467.JPG', alt: 'Camp 2001 Photo 8', size: 'large' },
            { id: '10', src: '/images/gallery/2001/Copy of IMG_8468.JPG', alt: 'Camp 2001 Photo 9', size: 'small' },
            { id: '11', src: '/images/gallery/2001/Copy of IMG_8469.JPG', alt: 'Camp 2001 Photo 10', size: 'medium' }
        ]
    },
    {
        id: 'buraq-1999',
        year: '1999',
        title: '1999',
        coverImage: '/images/gallery/1999/buraqCover1999.png',
        highlight: 'Camp 1999 Adventures',
        aboutCamp: {
            heading: 'MILLENNIUM PREPARATION',
            paragraph: 'Buraq experimented with summer camps- but without tents and under harsh weather, it lacked the spirit that defined it. The experience made one thing clear: Buraq belongs in winter. The next camp brought back the cold, the canvas, and the challenge.'
        },
        values: ['Adaptability ',' Self-reliance ',' Gratitude'],
        photos: [
            { id: '1', src: '/images/gallery/1999/buraqCover1999.png', alt: 'Camp 1999 Cover', size: 'banner' },
            { id: '2', src: '/images/gallery/1999/Copy of IMG_8470.JPG', alt: 'Camp 1999 Photo 1', size: 'large' },
            { id: '3', src: '/images/gallery/1999/Copy of IMG_8471.JPG', alt: 'Camp 1999 Photo 2', size: 'medium' },
            { id: '4', src: '/images/gallery/1999/Copy of IMG_8472.JPG', alt: 'Camp 1999 Photo 3', size: 'small' },
            { id: '5', src: '/images/gallery/1999/Copy of IMG_8473.JPG', alt: 'Camp 1999 Photo 4', size: 'medium' },
            { id: '6', src: '/images/gallery/1999/Copy of IMG_8474.JPG', alt: 'Camp 1999 Photo 5', size: 'large' },
            { id: '7', src: '/images/gallery/1999/Copy of IMG_8475.JPG', alt: 'Camp 1999 Photo 6', size: 'small' },
            { id: '8', src: '/images/gallery/1999/Copy of IMG_8476.JPG', alt: 'Camp 1999 Photo 7', size: 'medium' },
            { id: '9', src: '/images/gallery/1999/Copy of IMG_8477.JPG', alt: 'Camp 1999 Photo 8', size: 'large' },
            { id: '10', src: '/images/gallery/1999/Copy of IMG_8478.JPG', alt: 'Camp 1999 Photo 9', size: 'small' },
            { id: '11', src: '/images/gallery/1999/Copy of IMG_8479.JPG', alt: 'Camp 1999 Photo 10', size: 'medium' }
        ]
    },
    {
        id: 'buraq-1997',
        year: '1997',
        title: '1997',
        coverImage: '/images/gallery/1997/buraqCover1997.png',
        highlight: 'Camp 1997 Adventures',
        aboutCamp: {
            heading: 'STEADY PROGRESS',
            paragraph: 'By this edition, Buraq had evolved into more than just a camp- it was a benchmark. With returning alumni mentors, higher application numbers, and an expanded curriculum, the camp continued to push cadets further- intellectually, emotionally, and as future leaders.'
        },
        values: ['Strategic Thinking ',' Open-mindedness ',' Resilience'],
        photos: [
            { id: '1', src: '/images/gallery/1997/buraqCover1997.png', alt: 'Camp 1997 Cover', size: 'banner' },
            { id: '2', src: '/images/gallery/1997/Copy of IMG_8480.JPG', alt: 'Camp 1997 Photo 1', size: 'large' },
            { id: '3', src: '/images/gallery/1997/Copy of IMG_8482.JPG', alt: 'Camp 1997 Photo 2', size: 'medium' },
            { id: '4', src: '/images/gallery/1997/Copy of IMG_8483.JPG', alt: 'Camp 1997 Photo 3', size: 'small' },
            { id: '5', src: '/images/gallery/1997/Copy of IMG_8484.JPG', alt: 'Camp 1997 Photo 4', size: 'medium' },
            { id: '6', src: '/images/gallery/1997/Copy of IMG_8485.JPG', alt: 'Camp 1997 Photo 5', size: 'large' },
            { id: '7', src: '/images/gallery/1997/Copy of IMG_8486.JPG', alt: 'Camp 1997 Photo 6', size: 'small' },
            { id: '8', src: '/images/gallery/1997/Copy of IMG_8487.JPG', alt: 'Camp 1997 Photo 7', size: 'medium' },
            { id: '9', src: '/images/gallery/1997/Copy of IMG_8488.JPG', alt: 'Camp 1997 Photo 8', size: 'large' },
            { id: '10', src: '/images/gallery/1997/Copy of IMG_8489.JPG', alt: 'Camp 1997 Photo 9', size: 'small' },
            { id: '11', src: '/images/gallery/1997/Copy of IMG_8490.JPG', alt: 'Camp 1997 Photo 10', size: 'medium' }
        ]
    },
    {
        id: 'buraq-1996',
        year: '1996',
        title: '1996',
        coverImage: '/images/gallery/1996/buraqCover1996.png',
        highlight: 'Camp 1996 Adventures',
        aboutCamp: {
            heading: 'THE THIRD TIME',
            paragraph: 'The third edition of Buraq cemented its place as a transformative learning experience. With more diverse subjects, refined activities, and an increasingly competitive selection process, the camp began to draw attention not just for its content- but for the kind of individuals it was shaping.'
        },
        values: ['Commitment ',' Consistency ',' Focus'],
        photos: [
            { id: '1', src: '/images/gallery/1996/buraqCover1996.png', alt: 'Camp 1996 Cover', size: 'banner' },
            { id: '2', src: '/images/gallery/1996/Copy of IMG_8492.JPG', alt: 'Camp 1996 Photo 1', size: 'large' },
            { id: '3', src: '/images/gallery/1996/Copy of IMG_8493.JPG', alt: 'Camp 1996 Photo 2', size: 'medium' },
            { id: '4', src: '/images/gallery/1996/Copy of IMG_8494.JPG', alt: 'Camp 1996 Photo 3', size: 'small' },
            { id: '5', src: '/images/gallery/1996/Copy of IMG_8495.JPG', alt: 'Camp 1996 Photo 4', size: 'medium' },
            { id: '6', src: '/images/gallery/1996/Copy of IMG_8496.JPG', alt: 'Camp 1996 Photo 5', size: 'large' },
            { id: '7', src: '/images/gallery/1996/Copy of IMG_8497.JPG', alt: 'Camp 1996 Photo 6', size: 'small' },
            { id: '8', src: '/images/gallery/1996/Copy of IMG_8498.JPG', alt: 'Camp 1996 Photo 7', size: 'medium' },
            { id: '9', src: '/images/gallery/1996/Copy of IMG_8499.JPG', alt: 'Camp 1996 Photo 8', size: 'large' },
            { id: '10', src: '/images/gallery/1996/Copy of IMG_8500.JPG', alt: 'Camp 1996 Photo 9', size: 'small' },
            { id: '11', src: '/images/gallery/1996/Copy of IMG_8501.JPG', alt: 'Camp 1996 Photo 10', size: 'medium' }
        ]
    },
    {
        id: 'buraq-1995',
        year: '1995',
        title: '1995',
        coverImage: '/images/gallery/1995/buraqCover1995.jpg',
        highlight: 'Camp 1995 Adventures',
        aboutCamp: {
            heading: 'THE MISSION CONTINUES',
            paragraph: 'With stronger mentorship, more rigorous missions, and a growing support network, the camp continued to push the boundaries of what learning could look like — proving that Buraq wasn’t a one-time experiment, but the start of a powerful tradition.'
        },
        values: ['Discipline ',' Teamwork ',' Adaptability'],
        photos: [
            { id: '1', src: '/images/gallery/1995/buraqCover1995.jpg', alt: 'Camp 1995 Cover', size: 'banner' },
            { id: '2', src: '/images/gallery/1995/Copy of IMG_8502.JPG', alt: 'Camp 1995 Photo 1', size: 'large' },
            { id: '3', src: '/images/gallery/1995/Copy of IMG_8503.JPG', alt: 'Camp 1995 Photo 2', size: 'medium' },
            { id: '4', src: '/images/gallery/1995/Copy of IMG_8504.JPG', alt: 'Camp 1995 Photo 3', size: 'small' },
            { id: '5', src: '/images/gallery/1995/Copy of IMG_8505.JPG', alt: 'Camp 1995 Photo 4', size: 'medium' },
            { id: '6', src: '/images/gallery/1995/Copy of IMG_8506.JPG', alt: 'Camp 1995 Photo 5', size: 'large' },
            { id: '7', src: '/images/gallery/1995/Copy of IMG_8507.JPG', alt: 'Camp 1995 Photo 6', size: 'small' },
            { id: '8', src: '/images/gallery/1995/Copy of IMG_8508.JPG', alt: 'Camp 1995 Photo 7', size: 'medium' },
            { id: '9', src: '/images/gallery/1995/Copy of IMG_8509.JPG', alt: 'Camp 1995 Photo 8', size: 'large' },
            { id: '10', src: '/images/gallery/1995/Copy of IMG_8510.JPG', alt: 'Camp 1995 Photo 9', size: 'small' },
            { id: '11', src: '/images/gallery/1995/Copy of IMG_8511.JPG', alt: 'Camp 1995 Photo 10', size: 'medium' }
        ]
    },
    {
        id: 'buraq-1994',
        year: '1994',
        title: '1994',
        coverImage: '/images/gallery/1994/buraqCover1994.png',
        highlight: 'Camp 1994 Adventures',
        aboutCamp: {
            heading: 'FOR THE FIRST TIME EVER IN PAKISTAN',
            paragraph: 'Buraq is where curiosity lifts off- and the leaders of tomorrow begin their ascent.'
        },
        values: ['Vision ',' Courage ',' Curiosity'],
        photos: [
            { id: '1', src: '/images/gallery/1994/buraqCover1994.png', alt: 'Camp 1994 Cover', size: 'banner' },
            { id: '2', src: '/images/gallery/1994/Copy of IMG_8512.JPG', alt: 'Camp 1994 Photo 1', size: 'large' },
            { id: '3', src: '/images/gallery/1994/Copy of IMG_8514.JPG', alt: 'Camp 1994 Photo 2', size: 'medium' },
            { id: '4', src: '/images/gallery/1994/Copy of IMG_8515.JPG', alt: 'Camp 1994 Photo 3', size: 'small' },
            { id: '5', src: '/images/gallery/1994/Copy of IMG_8516.JPG', alt: 'Camp 1994 Photo 4', size: 'medium' },
            { id: '6', src: '/images/gallery/1994/Copy of IMG_8517.JPG', alt: 'Camp 1994 Photo 5', size: 'large' },
            { id: '7', src: '/images/gallery/1994/Copy of IMG_8518.JPG', alt: 'Camp 1994 Photo 6', size: 'small' },
            { id: '8', src: '/images/gallery/1994/Copy of IMG_8519.JPG', alt: 'Camp 1994 Photo 7', size: 'medium' },
            { id: '9', src: '/images/gallery/1994/Copy of IMG_8520.JPG', alt: 'Camp 1994 Photo 8', size: 'large' },
            { id: '10', src: '/images/gallery/1994/Copy of IMG_8521.JPG', alt: 'Camp 1994 Photo 9', size: 'small' },
            { id: '11', src: '/images/gallery/1994/Copy of IMG_8522.JPG', alt: 'Camp 1994 Photo 10', size: 'medium' }
        ]
    },
];
