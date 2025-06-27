import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head';
import { APP_NAME, DOMAIN, MANGA_NAME, NEXT_PREVIOUS_PREFIX, IMAGE_PREFIX, CHAPTER_PREFIX, AUTHOR_PAGE, LOGO_URL, chaptersData, IMAGES_SUBDOMAIN, DOMAIN_NAME, MANGA_GENRE, MANGA_TYPE, last5chapters, URL_PREFIX } from '@/config';
// import DisqusComments from '@/components/DisQus';
// import { AiFillChrome } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaRedditAlien } from "react-icons/fa";
export const runtime = 'experimental-edge';

export default function Chapter({ chapterNumber, imageUrls, totalChapters, params, errorcode }) {

    if (errorcode) {
        return (
            <>
                <Navbar />
                <div className="text-center py-10 text-white">
                    <h1 className="text-3xl font-bold mt-10">404 Page Not Found</h1>
                    <p className="text-lg mt-4">The page you are looking for does not exist.</p>
                </div>
                <Footer />
            </>
        );
    }


    const chapterIndex = chaptersData.findIndex(chapter => chapter.chapterNumber === chapterNumber);
    const previousChapter = chapterIndex > 0 ? chaptersData[chapterIndex - 1].chapterNumber : null;
    const nextChapter = chapterIndex < totalChapters - 1 ? chaptersData[chapterIndex + 1].chapterNumber : null;


    const DESCRIPTION = `Read ${MANGA_NAME} chapter ${chapterNumber} online at ${DOMAIN_NAME}. All ${MANGA_NAME} latest manga and manhwa chapters in high quality english are always updated regularly at our website.`;
    const URL = params.chapter;


    const schema00 =
    {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${DOMAIN}/${URL}`
        },
        "headline": `${MANGA_NAME} Chapter ${chapterNumber}`,
        "description": `${DESCRIPTION}`,
        "image": `${IMAGES_SUBDOMAIN}/chapter-${chapterNumber}/1.webp`,
        "author": {
            "@type": "Person",
            "name": `${MANGA_NAME} Team`,
            "url": `${AUTHOR_PAGE}`
        },
        "publisher": {
            "@type": "Person",
            "name": `${APP_NAME}`,
            "logo": {
                "@type": "ImageObject",
                "url": `${LOGO_URL}`
            }
        },
    }


    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "@id": `${DOMAIN}/${URL}/#article`,
                "isPartOf": {
                    "@id": `${DOMAIN}/${URL}`,
                },
                "author": {
                    "name": "Divyanshu Rawat",
                    "@id": `${DOMAIN}/#/schema/person/7edc4ad8bsc84d70b9422d149194021b`,
                },
                "headline": `${MANGA_NAME} Chapter ${chapterNumber}`,
                "mainEntityOfPage": {
                    "@id": `${DOMAIN}/${URL}`
                },
                "wordCount": 150,
                "commentCount": 34,
                "publisher": {
                    "@id": `${DOMAIN}/#organization`
                },
                "image": {
                    "@id": `${IMAGES_SUBDOMAIN}/chapter-${chapterNumber}/1.webp`,
                },
                "thumbnailUrl": `${IMAGES_SUBDOMAIN}/chapter-${chapterNumber}/1.webp`,
                "articleSection": ["Manga Series"],
                "inLanguage": "en-US",
                "potentialAction": [
                    {
                        "@type": "CommentAction",
                        "name": "Comment",
                        "target": [
                            `${DOMAIN}/${URL}/#respond`
                        ]
                    }
                ]
            },
            {
                "@type": "WebPage",
                "@id": `${DOMAIN}/${URL}`,
                "url": `${DOMAIN}/${URL}`,
                "name": `${MANGA_NAME} Chapter ${chapterNumber}`,
                "isPartOf": {
                    "@id": `${DOMAIN}/#website`
                },
                "primaryImageOfPage": {
                    "@id": `${DOMAIN}/${URL}/#primaryimage`
                },
                "image": {
                    "@id": `${DOMAIN}/${URL}/#primaryimage`
                },
                "thumbnailUrl": `${IMAGES_SUBDOMAIN}/chapter-${chapterNumber}/1.webp`,
                "description": `Read ${MANGA_NAME} manga Online at ${DOMAIN_NAME} which is the best website for reading manga online in very high quality.`,
                "breadcrumb": {
                    "@id": `${DOMAIN}/${URL}/#breadcrumb`
                },
                "inLanguage": "en-US",
                "potentialAction": [
                    {
                        "@type": "ReadAction",
                        "target": [
                            `${DOMAIN}/${URL}`
                        ]
                    }
                ]
            },
            {
                "@type": "ImageObject",
                "inLanguage": "en-US",
                "@id": `${DOMAIN}/${URL}/#primaryimage`,
                "url": `${IMAGES_SUBDOMAIN}/chapter-${chapterNumber}/1.webp`,
                "contentUrl": `${IMAGES_SUBDOMAIN}/chapter-${chapterNumber}/1.webp`,
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${DOMAIN}/${URL}/#breadcrumb`,
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": `${DOMAIN}/`
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": `${MANGA_NAME} Chapter ${chapterNumber}`,
                    }
                ]
            },
            {
                "@type": "WebSite",
                "@id": `${DOMAIN}/#website`,
                "url": `${DOMAIN}`,
                "name": "My Manga Blog",
                "description": `Read ${MANGA_NAME} manga Online at ${DOMAIN_NAME} which is the best website for reading manga online in very high quality.`,
                "publisher": {
                    "@id": `${DOMAIN}/#organization`
                },
                "potentialAction": [
                    {
                        "@type": "SearchAction",
                        "target": {
                            "@type": "EntryPoint",
                            "urlTemplate": `${DOMAIN}/?s={search_term_string}`,
                        },
                        "query-input": {
                            "@type": "PropertyValueSpecification",
                            "valueRequired": true,
                            "valueName": "search_term_string"
                        }
                    }
                ],
                "inLanguage": "en-US"
            },
            {
                "@type": "Organization",
                "@id": `${DOMAIN}/#organization`,
                "name": "My Manga Blog",
                "url": `${DOMAIN}`,
                "logo": {
                    "@type": "ImageObject",
                    "inLanguage": "en-US",
                    "@id": `${DOMAIN}/#/schema/logo/image/`,
                    "url": `${LOGO_URL}`,
                    "contentUrl": `${LOGO_URL}`,
                    "width": 192,
                    "height": 192,
                    "caption": "My Manga Blog"
                },
                "sameAs": []
            },
            {
                "@type": "Person",
                "@id": `${DOMAIN}/#/schema/person/7edc4ad8p1cf4d70b7422c149194021b`,
                "name": "Divyanshu Rawat"
            }
        ]
    }



    const postUrl = `${DOMAIN}/${URL_PREFIX}-${chapterNumber}/`;
    const encodedTitle = `${MANGA_NAME} Chapter ${chapterNumber}`;
    const encodedUrl = postUrl;

    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedTitle} ${encodedUrl}`;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
    const telegramUrl = `https://telegram.me/share/url?url=${encodedUrl}&text=${encodedTitle}`;
    const redditUrl = `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`;


    const head = () => (
        <Head>
            <title>{`${MANGA_NAME} Chapter ${chapterNumber}`}</title>
            <meta name="description" content={DESCRIPTION} />
            <link rel="canonical" href={`${DOMAIN}/manga/${URL}/`} />
            <meta property="og:title" content={`${MANGA_NAME} Chapter ${chapterNumber}`} />
            <meta property="og:description" content={DESCRIPTION} />
            <meta property="og:type" content="webiste" />
            <meta name="robots" content="follow, index, noarchive, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
            <meta property="og:url" content={`${DOMAIN}/manga/${URL}/`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />
            <meta property="og:image" content={`${IMAGES_SUBDOMAIN}/chapter-${chapterNumber}/1.webp`} />
            <meta property="og:image:secure_url" content={`${IMAGES_SUBDOMAIN}/chapter-${chapterNumber}/1.webp`} />
            <meta property="og:image:type" content="image/webp" />
            {/* <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /> */}
        </Head >
    );


    return (
        <>
            {head()}
            <Navbar />
            <article>
                <h1 className="text-3xl font-bold text-center text-[white] px-5 pt-5 md:my-5">{`${MANGA_NAME} Chapter ${chapterNumber}`}</h1>

                <div className='flex justify-center px-5 text-[#85e1e6] text-[13px] mb-5'>
                    <div><a href={DOMAIN}>Home</a></div>
                    <div className='px-2'>{` -> `}</div>
                    <div><a href={`${DOMAIN}/${URL_PREFIX}-${chapterNumber}/`}>{`${MANGA_NAME} Chapter ${chapterNumber}`}</a></div>
                </div>


                <div className="flex gap-4 flex-wrap px-5 text-white justify-center mb-3">


                    <a href={facebookUrl} className="flex gap-1 items-center bg-blue-600 rounded-md px-2 py-1">
                        <span><FaFacebook /></span>
                        <span className={` text-[12px]`}>FaceBook</span>
                    </a>

                    <a href={redditUrl} className="flex gap-1 items-center bg-orange-500 rounded-md px-2 py-1">
                        <span className="pb-[3px]"><FaRedditAlien /></span>
                        <span className={` text-[12px]`}>Reddit</span>
                    </a>

                    <a href={twitterUrl} className="flex gap-1 items-center bg-blue-500 rounded-md px-2 py-1">
                        <span><FaTwitter /></span>
                        <span className={`text-[12px]`}>Twitter</span>
                    </a>



                    <a href={telegramUrl} className="flex gap-1 items-center bg-blue-600 rounded-md px-2 py-1">
                        <span><FaTelegram /></span>
                        <span className={` text-[12px]`}>Telegram</span>
                    </a>

                    <a href={whatsappUrl} className="flex gap-1 items-center bg-green-500 rounded-md px-2 py-1">
                        <span><IoLogoWhatsapp /></span>
                        <span className={` text-[12px]`}>WhatsApp</span>
                    </a>

                </div>







                {/* <p className='text-center px-4 pt-2 font-bold text-[white]'>{`You are on ${MANGA_NAME} Chapter ${chapterNumber}.`}</p> */}

                <div className='mx-3 my-7'>
                    <div className="flex justify-between max-w-[800px] mx-auto md:mb-[50px] mt-5">
                        {previousChapter !== null ? (
                            <Link href={`${DOMAIN}/${NEXT_PREVIOUS_PREFIX}-${previousChapter}/`}>
                                <button className="text-[black] text-[13px] hover:scale-105 active:scale-95 transition-transform rounded bg-[white] px-2 py-2 font-semibold">Previous</button>
                            </Link>
                        ) : (
                            <button className="text-[black] text-[13px] rounded bg-[gray] px-2 py-2 font-semibold cursor-not-allowed" disabled>Previous</button>
                        )}

                        {nextChapter !== null ? (
                            <Link href={`${DOMAIN}/${NEXT_PREVIOUS_PREFIX}-${nextChapter}/`}>
                                <button className="text-[black] text-[13px] hover:scale-105 active:scale-95 transition-transform rounded bg-[white] px-2 py-2 font-semibold">Next</button>
                            </Link>
                        ) : (
                            <button className="text-[white] text-[13px] rounded bg-[gray] px-2 py-2 font-semibold cursor-not-allowed" disabled>Next</button>
                        )}

                    </div>
                </div>

                <div className='max-w-[1200px] mx-auto mb-5'>
                    {imageUrls.map((imageUrl, index) => (
                        <div className='allimages' key={index}>
                            <img loading="lazy" src={imageUrl} alt={`Chapter ${chapterNumber} Image ${index + 1}`} />
                        </div>
                    ))}
                </div>

                {/* <div className='py-10 bg-[#0f0511]'>
                    <h2 className='text-4xl text-center text-[white] font-blod px-4 mb-10'>Comment Section</h2>
                    <section className='max-w-[1000px] mx-auto px-5'>
                        <DisqusComments url={`/manga/${URL}`} identifier={chapterNumber} title={`${MANGA_NAME} Chapter ${chapterNumber}`} />
                    </section>
                </div> */}
                <div className="text-white my-5">
                    <h2 className="text-3xl text-center my-5">{`${MANGA_NAME} Latest Chapters`}</h2>
                    {last5chapters?.map((chapter, index) => (
                        <div key={index} className="text-center p-1.5 hover:underline"><a href={`${DOMAIN}/${URL_PREFIX}-${chapter.chapterNumber}/`}>{`${MANGA_NAME} Chapter ${chapter.chapterNumber}`}</a></div>
                    ))}
                </div>




                <div className="flex justify-center">
                    <iframe width="300" height="315" src="https://www.youtube.com/embed/u6HL6FKtAcA?si=mKlU1LAx4MbbTryi" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>





            </article>

            <Footer />
        </>
    );
}

// export async function getStaticPaths() {
//     const paths = chaptersData.map(chapter => ({
//         params: { chapter: `chapter-${chapter.chapterNumber}` },
//     }));
//     return { paths, fallback: 'blocking' };
// }

export async function getServerSideProps({ req, res, params }) {
    const chapterParam = params.chapter;

    if (!chapterParam.startsWith(CHAPTER_PREFIX)) {
        return { props: { errorcode: true } };
    }

    const chapterNumber = chapterParam.split(`chapter-`)[1];

    // if (chapterNumber === undefined) { return { props: { errorcode: true } }; }

    const chapterData = chaptersData.find(ch => ch.chapterNumber === chapterNumber);
    if (!chapterData) { return { props: { errorcode: true } }; }

    const chapterIndex = chaptersData.findIndex(ch => ch.chapterNumber === chapterNumber);

    const totalChapters = chaptersData.length;
    const numImages = chapterData.numImages;
    const imageUrls = getImageUrls(chapterNumber, numImages);

    res.setHeader('Cache-Control', 'public, s-maxage=108000, stale-while-revalidate=59');

    return { props: { chapterNumber, imageUrls, totalChapters, params, chapterIndex } };
}


const getImageUrls = (chapterNumber, numImages) => {
    const imageUrls = [];
    const chapterImagesFolder = `${IMAGES_SUBDOMAIN}/chapter-${chapterNumber}`;
    for (let i = 1; i <= numImages; i++) {
        const imageUrl = `${chapterImagesFolder}/${i}.webp`;
        imageUrls.push(imageUrl);
    }
    return imageUrls;
};

