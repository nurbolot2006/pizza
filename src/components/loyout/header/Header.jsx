import React from 'react';

const Header = (props) => {
    const {setShowModal} = props
    return (
        <div className={"container border-b-[1px] py-[10px] border-[#F0F0F0] mx-auto flex items-center justify-between"}>
            <div className={"flex items-center gap-[40px]"}>
                <select name="" id="">
                    <option value="">Москва</option>
                </select>
                <p>Проверить адрес</p>
                <p>Среднее время доставки*:
                    <span className={"font-bold pl-1"}>00:24:19</span>
                </p>
            </div>
            <div className={"flex items-center gap-40"}>
                <p>Время работы: с 11:00 до 23:00</p>
                <p className={"cursor-pointer"} onClick={ () => {
                    setShowModal('login')
                }}>Войти в аккаунт</p>
            </div>
        </div>
    );
};

export default Header;
