import React, { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import HeadlessTippy from "@tippyjs/react/headless";
import { FiMenu, FiSettings } from 'react-icons/fi';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdOutlineSort } from 'react-icons/md';
import { TiDelete } from 'react-icons/ti';
import './Headersearch.css';
// import { BiLoaderCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import clinicData from '../../data/Browseclinic.json';
import doctorData from '../../data/Browsedoctor.json';
import packageData from '../../data/Packagelist.json';

const allData = { clinicData, doctorData, packageData };

function HeaderSearch() {
    const [query, setQuery] = useState("");
    const [data, setData] = useState({ clinicData: [], doctorData: [], packageData: [] });
    const navigate = useNavigate();

    useEffect(() => {
        setData(allData);
    }, []);

    const filteredClinics = data.clinicData.filter((c) => c.name.toLowerCase().includes(query.toLowerCase()));
    const filteredDoctors = data.doctorData.filter((d) => d.name.toLowerCase().includes(query.toLowerCase()));
    const filteredPackages = data.packageData.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()));

    const handleSearch = (item) => {
        const { id } = item;
        if (id.includes("PK")) {
            navigate(`/search/thong-tin-phong-kham/${id}`);
        }
        if (id.includes("BS")) {
            navigate(`/search/thong-tin-bac-si/${id}`);
        }
        if (id.includes("N")) {
            navigate(`/search/thong-tin-goi/${id}`);
        }
        setQuery("");
    };
    return (
        <div className='headerSearch'>
            <MdOutlineSort size={20} className='icon' />
            <HeadlessTippy visible={query.length > 0} interactive placement="bottom" render={(attrs) => (
                <div className="searchBox" tabIndex="-1" {...attrs}>
                    {filteredClinics.length > 0 && (
                        <div>
                            {filteredClinics.map((item) => (
                                <div key={item.id} className='searchItem' onClick={() => handleSearch(item)}> <AiOutlineSearch size={20}/> {item.name} </div>
                            ))}
                        </div>
                    )}
                    {filteredDoctors.length > 0 && (
                        <div>
                            {filteredDoctors.map((item) => (
                                <div key={item.id} className='searchItem' onClick={() => handleSearch(item)}> <AiOutlineSearch size={20}/> {item.name} </div>
                            ))}
                        </div>
                    )}
                    {filteredPackages.length > 0 && (
                        <div>
                            {filteredPackages.map((item) => (
                                <div key={item.id} className='searchItem' onClick={() => handleSearch(item)}> <AiOutlineSearch size={20}/> {item.name} </div>
                            ))}
                        </div>
                    )}
                    {filteredClinics.length === 0 && filteredDoctors.length === 0 && filteredPackages.length === 0 && (
                        <div className='noResults'>Không tìm thấy kết quả</div>
                    )}
                </div>
            )}>
                <div className='searchInputWrapper'>
                    <input type="text" placeholder="Tìm kiếm..." className='searchInput' value={query} onChange={(e) => setQuery(e.target.value)} />
                    {query && (
                        <button className='clear' onClick={() => setQuery("")}>
                            <TiDelete size={20} className="iconDelete" />
                        </button>
                    )}
                    <AiOutlineSearch size={20} className="iconSearch" />
                </div>
            </HeadlessTippy>
            <Tippy content="Menu" placement="bottom">
                <button className='menuButton'>
                    <FiMenu size={20} className="icon" alt="" />
                </button>
            </Tippy>
            <Tippy content="Cài đặt" placement="bottom">
                <button className='settingsButton'>
                    <FiSettings size={20} className="icon" alt="" />
                </button>
            </Tippy>
        </div>
    );
}
export { HeaderSearch };