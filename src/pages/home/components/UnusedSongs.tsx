import React, { useEffect, useState } from 'react'
import { Carousel } from 'primereact/carousel'
import { Song } from '../../../models/Model.Song';
import { RepertoireService } from '../../../services/Service.Repertoire';

export default function UnusedSongs() {
    const repertoire = new RepertoireService();

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetchSongs()
    }, [])

    const fetchSongs = async() => {
        const response = await repertoire.getRepertoire();
        setSongs(response)
    }

    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const itemTemplate = (song: Song) => {
        return (
                <div className=' p-2 flex justify-content-between align-items-center'>
                    <h4 className="">{song.name}</h4>
                    <h6 className="">{song.usage}</h6>
                </div>
        );
    }
    return (
        <div className="">
            <h1>Poco usados</h1>
            <Carousel value={songs} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} itemTemplate={itemTemplate} />
        </div>
    )
}
