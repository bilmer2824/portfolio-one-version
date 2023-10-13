import { createContext, useState, useEffect } from "react";
import { eng } from '../../Layout/lang/Lang.ENG';
import { ru } from '../../Layout/lang/Lang.RU';
import { uz } from '../../Layout/lang/Lang.UZ';
import { kz } from '../../Layout/lang/Lang.KZ';
import { kr } from '../../Layout/lang/Lang.KR';
import { arb  } from '../../Layout/lang/Lang.ARB';
const Context = createContext();
export const ControlNotes = ({ children }) => {
    const [allActive, setAllActive] = useState(false);
    const [onMenu, setOnMenu] = useState(false);
    const [isVisibility, setIsVisibility] = useState(false);
    const [state, setState] = useState(false);
    const [day, setDay] = useState(false);
    const [moon, setMoon] = useState();
    const [error, setError] = useState(false);
    const [offActive_1, setOffActive_1] = useState(true);
    const [offActive_2, setOffActive_2] = useState(false);
    const [offActive_3, setOffActive_3] = useState(false);
    const [Letstate, setLetState] = useState(false);
    const [Language, setLanguage] = useState(eng, ru, uz, kz, kr);
    const [TransClick, setTransClick] = useState(true);
    const [headerTransPlus, setHeaderTransPlus] = useState(true);
    const [changeTag, setChangeTag] = useState(true);
    // class methodsArray
    const onActive = () => { setAllActive(!allActive) };
    const goToBtn = () => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); };
    const listenToScroll = () => { let heightToHidden = 100; const winScroll = document.body.scrollTop || document.documentElement.scrollTop; if (winScroll > heightToHidden) { setIsVisibility(true) } else { setIsVisibility(false) } };
    const onMenuActive = () => { setOnMenu(!onMenu) };
    const onMain_Active = () => { setOnMenu(onMenu === false) };
    const onSetting = () => { setState(!state) };
    const Home_Link = () => { }
    // day night \\
    const activate = () => {
        setDay(!day);
        setMoon(!moon);
        setError(!error);
        if (day === false) {
            document.getElementById('body').style.backgroundColor = 'black';
            document.querySelector('header').style.backgroundColor = 'rgba(0,0,0,0)';
        } else {
            document.getElementById('body').style.backgroundColor = 'white';
            document.querySelector('header').style.backgroundColor = 'rgba(0,0,0,0)';
        }
    };
    // className night \\
    const exitActive = () => { setAllActive(!allActive) }
    const onActive_1 = () => { setOffActive_1(!offActive_1); setOffActive_2(false); setOffActive_3(false); };
    const onActive_2 = () => { setOffActive_2(!offActive_2); setOffActive_1(false); setOffActive_3(false); };
    const onActive_3 = () => { setOffActive_3(!offActive_3); setOffActive_1(false); setOffActive_2(false); };
    const ActiveClass = () => { setLetState(!Letstate); };
    const anime = () => { setAllActive(!allActive) };
    
    // language class name for animation \\
    
    const Lang_uz = () => { setLanguage(uz)   }  // 1
    
    const Lang_eng = () => { setLanguage(eng) }  // 2
    
    const Lang_ru = () => { setLanguage(ru)   }  // 3
    
    const Lang_kr = () => { setLanguage(kr)   }  // 4
    
    const Lang_kz = () => { setLanguage(kz)   }  // 5
    
    const Lang_arb  = () => { setLanguage(arb)   }  // 8
    
    
    
    
    const profileTag = () => {
        setAllActive(!allActive) // setHeaderTransPlus(!headerTransPlus)
    }
    const onChange = () => { setChangeTag(!changeTag) }
    const formClick = () => { setTransClick(TransClick) }






    useEffect(() => { window.addEventListener('scroll', listenToScroll); return () => window.removeEventListener('scroll', listenToScroll); }, []);

    useEffect(() => {
        document.addEventListener('keydown', detectKeyDown, true,)
    })
    const detectKeyDown = (e) => {
        if (e.keyCode === 27) {
            setAllActive(!allActive)
        }
        if (e.keyCode === 113) {
            setDay(!day);
            setMoon(!moon);
            setError(!error);
            if (day === false) {
                document.getElementById('body').style.backgroundColor = 'black';
                document.querySelector('header').style.backgroundColor = 'rgba(0,0,0,0)';
            } else {
                document.getElementById('body').style.backgroundColor = 'white';
                document.querySelector('header').style.backgroundColor = 'rgba(0,0,0,0)';
            }
        }
        if (e.keyCode === 192) {
            setState(!state)
        }
        if (e.keyCode === 49) {
            setLanguage(uz)
        }
        if (e.keyCode === 50) {
            setLanguage(eng)
        }
        if (e.keyCode === 51) {
            setLanguage(ru)
        }
        if (e.keyCode === 52) {
            setLanguage(arb)
        }
        if (e.keyCode === 53) {
            setLanguage(kz)
        }
        if (e.keyCode === 54) {
            setLanguage(kr)
        }
    }

    const [images, setImages] = useState([])
    const [imageURL, setImageURL] = useState([], false)



    useEffect(() => {
        if (images.length < 1) return;
        const newImageURL = [];
        images.forEach(image => newImageURL.push(URL.createObjectURL(image)));
        setImageURL(newImageURL)
    }, [images])
    function onImageChange(e) {
        setImages([...e.target.files])
    }




    return <Context.Provider value={{ allActive, setAllActive, onActive, onMenu, onSetting, Letstate, onMain_Active, onMenuActive, isVisibility, goToBtn, exitActive, state, activate, moon, Home_Link, onActive_1, offActive_1, ActiveClass, onActive_2, offActive_2, onActive_3, offActive_3, setLetState, day, error, anime, Lang_uz, Lang_eng, Lang_ru, Lang_kr, Lang_kz, Language, profileTag, headerTransPlus, onChange, changeTag, formClick, TransClick, imageURL, images, onImageChange, Lang_arb,  }}>{children}</Context.Provider>
};
export default Context;
