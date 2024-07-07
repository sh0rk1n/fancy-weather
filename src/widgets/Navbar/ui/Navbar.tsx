import React, { memo, useState } from 'react';
import {
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
    Switch,
    Field,
    Label,
    Description,
    Input,
} from '@headlessui/react';

import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import RefreshSvg from '@/shared/assets/icons/background-refresh-btn.svg';
import ArrowSvg from '@/shared/assets/icons/label-arrow.svg';
import MicrophoneSvg from '@/shared/assets/icons/microphone.svg';

interface NavbarProps {
    className?: string;
}

const language = [
    { id: 1, language: 'EN' },
    { id: 2, language: 'RU' },
    { id: 3, language: 'BE' },
];

export const Navbar = memo((props: NavbarProps) => {
    const { className } = props;
    const [selectedPerson, setSelectedPerson] = useState(language[0]);
    const [enabled, setEnabled] = useState(false);
    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.left}>
                <Button className={cls.refresh}>
                    <RefreshSvg />
                </Button>

                <Listbox
                    value={selectedPerson}
                    onChange={setSelectedPerson}
                    as="div"
                    className={classNames(cls.ListBox, {}, [className])}
                >
                    <ListboxButton className={cls.trigger}>
                        {selectedPerson.language}
                        <ArrowSvg className={cls.arrow} />
                    </ListboxButton>
                    <ListboxOptions anchor="bottom">
                        {language.map((item) => (
                            <ListboxOption
                                key={item.id}
                                value={item}
                                className=""
                            >
                                {item.language}
                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </Listbox>

                <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={classNames(cls.Switch, {}, [className])}
                >
                    <Button className={cls.farengeit}>°F</Button>
                    <Button className={cls.celcis}>°С</Button>
                </Switch>
            </div>
            <div className={cls.Search}>
                <div className={cls.SearchWrapper}>
                    <Input
                        name="search"
                        type="text"
                        placeholder="Search city or ZIP"
                        className={cls.input}
                    />
                    <Button className={cls.microphone}>
                        <MicrophoneSvg />
                    </Button>
                </div>

                <Button className={cls.SearchBtn}>SEARCH</Button>
            </div>
        </header>
    );
});
