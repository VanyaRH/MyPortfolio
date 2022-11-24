import {getImagesFromId} from "./projectsImages";

interface IProject{
    id: number,
    name: string,
    title: string,
    description: string,
    type: string,
    previewTitle: string,
    stack: Array<String>,
    roles: Array<String>,
    link: string,
    images: Array<any>,
}


export const Projects:Array<IProject> = [
    {
        id: 1,
        name: 'Nodapes',
        title: 'Engineering the bricks that build the web3',
        description: 'Single-page application to convey basic information about the development team, the technologies used and the portfolio',
        type: 'Nodapes',
        previewTitle: 'Single-page application',
        stack: ['JavaScript', 'HTML5', 'CSS3'],
        roles: ['Development', 'Optimization', 'Support'],
        link: 'https://nodapes.com/',
        images: getImagesFromId(1)
    },
    {
        id: 2,
        name: 'NFT Marketplace',
        title: 'NFT Marketplace',
        description: 'A store that allows you to buy or sell NFT tokens, organize auctions or participate in them, built on blockchain technology',
        type: 'NFT Marketplace',
        previewTitle: 'Multi-page application',
        stack: ['React.js', 'TypeScript'],
        roles: ['Development', 'Optimization', 'Support'],
        link: 'https://nftmonkey.online/',
        images: getImagesFromId(2)
    },
    {
        id: 3,
        name: 'Vinodex NFT Marketplace',
        title: 'Vinodex NFT Marketplace',
        description: 'A store that allows you to buy or sell NFT tokens, organize auctions or participate in them, built on blockchain technology',
        type: 'Vinodex NFT Marketplace',
        previewTitle: 'Multi-page application',
        stack: ['React.js', 'TypeScript', 'CSS'],
        roles: ['Development', 'Optimization', 'Support'],
        link: 'https://vinodex.io/',
        images: getImagesFromId(3)
    },
    {
        id: 4,
        name: `Cryptico`,
        title: 'Cryptico private messenger',
        description: 'A secure and encrypted solution for businesses, financial services, healthcare, education and public safety, all data is transmitted encrypted and stored only on the client side',
        type: 'Cryptico',
        previewTitle: 'Single-page application',
        stack: ['JavaScript', 'HTML5', 'CSS3'],
        roles: ['Development', 'Optimization', 'Support'],
        link: 'https://cryptico.chat/',
        images: getImagesFromId(4)
    },
    {
        id: 5,
        name: `OSBB Work`,
        title: 'OSBB Work',
        description: 'A useful and convenient tool that will allow you to quickly and efficiently set up all the necessary processes of managing the house and the territory of the association. Current news and events, live communication with residents, conducting surveys - all this is always at hand.',
        type: 'OSBB Work',
        previewTitle: 'Multi-page website',
        stack: ['JavaScript', 'HTML5', 'CSS3'],
        roles: ['Development', 'Optimization', 'Support'],
        link: 'https://osbb.work/',
        images: getImagesFromId(5)
    },
    {
        id: 6,
        name: `Money24`,
        title: 'Money24 - сurrency exchange',
        description: 'View current exchange rates, online exchange orders, personal account, information about balances and balances, the ability to order gifts and participate in promotions.',
        type: 'Money24',
        previewTitle: 'Multi-page website',
        stack: ['JavaScript', 'HTML5', 'CSS3'],
        roles: ['Development', 'Optimization', 'Support'],
        link: 'https://money24.com.ua/',
        images: getImagesFromId(6)
    },
    {
        id: 7,
        name: `Farvater Travel`,
        title: 'Farvater Travel',
        description: 'A convenient user account that allows you to view and manage your orders, participate in the bonus system from partners, the referral program, the loyalty program, and the ability to leave and view reviews.',
        type: 'Farvater Travel',
        previewTitle: 'Multi-page website',
        stack: ['JavaScript', 'HTML5', 'CSS3'],
        roles: ['Development', 'Optimization', 'Support'],
        link: 'https://farvater.travel/',
        images: getImagesFromId(7)
    },
    {
        id: 8,
        name: `Todo application`,
        title: 'Todo application',
        description: 'An application for recording and managing your personal tasks.',
        type: 'Todo application',
        previewTitle: 'Multi-page application (Pet-project)',
        stack: ['React', 'Redux', 'CSS3'],
        roles: ['Development', 'Optimization', 'Support'],
        link: 'https://todo-app-pet.vercel.app/',
        images: getImagesFromId(8)
    }
]

export const getProjectFromId = (id: number) => {
    const index = Projects.findIndex(x => x.id === id);
    return index !== -1 ? Projects[index] : null;
}