import project_1_1 from '../assets/images/projects/project1/project_1_1.png';
import project_1_2 from '../assets/images/projects/project1/project_1_2.png';

import project_2_1 from '../assets/images/projects/project2/project_2_1.png';
import project_2_2 from '../assets/images/projects/project2/project_2_2.png';

import project_3_1 from '../assets/images/projects/project3/project_3_1.png';
import project_3_2 from '../assets/images/projects/project3/project_3_2.png';
import project_3_3 from '../assets/images/projects/project3/project_3_3.png';

import project_4_1 from '../assets/images/projects/project4/project_4_1.png';
import project_4_2 from '../assets/images/projects/project4/project_4_2.png';
import project_4_3 from '../assets/images/projects/project4/project_4_3.png';
import project_4_4 from '../assets/images/projects/project4/project_4_4.png';

import project_5_1 from '../assets/images/projects/project5/project_5_1.png';
import project_5_2 from '../assets/images/projects/project5/project_5_2.png';
import project_5_3 from '../assets/images/projects/project5/project_5_3.png';

import project_6_1 from '../assets/images/projects/project6/project_6_1.png';
import project_6_2 from '../assets/images/projects/project6/project_6_2.png';
import project_6_3 from '../assets/images/projects/project6/project_6_3.png';

import project_7_1 from '../assets/images/projects/project7/project_7_1.png';
import project_7_2 from '../assets/images/projects/project7/project_7_2.png';
import project_7_3 from '../assets/images/projects/project7/project_7_3.png';

const ProjectsImages = [
    {
        id: 1,
        images: [
            project_1_1,
            project_1_2
        ]
    },
    {
        id: 2,
        images: [
            project_2_1,
            project_2_2
        ]
    },
    {
        id: 3,
        images: [
            project_3_2,
            project_3_1,
            project_3_3,
        ]
    },
    {
        id: 4,
        images: [
            project_4_1,
            project_4_2,
            project_4_3,
            project_4_4,
        ]
    },
    {
        id: 5,
        images: [
            project_5_1,
            project_5_2,
            project_5_3,
        ]
    },
    {
        id: 6,
        images: [
            project_6_2,
            project_6_1,
            project_6_3,
        ]
    },
    {
        id: 7,
        images: [
            project_7_1,
            project_7_2,
            project_7_3,
        ]
    },
]

export const getImagesFromId = (id: number) => {
    const index = ProjectsImages.findIndex(x => x.id === id);
    return index !== -1 ? ProjectsImages[index].images : [];
}