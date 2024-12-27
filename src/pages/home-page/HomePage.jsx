import {Combo, Cracks, Desert, Drink, Fire, Pizza, Sales1, Sales2, Sources, Sushi,} from "../../assets/index.js";
import {useEffect, useState} from "react";

const url = 'https://676ce7e30e299dd2ddfdcd54.mockapi.io/api/v1/pizza'

const menu = [
    {
        icon: Fire,
        name: 'Акции'
    },
    {
        icon: Pizza,
        name: 'Пицца',
        id: 'pizza',
    },
    {
        icon: Sushi,
        name: 'Суши',
        id: 'sushi',
    },
    {
        icon: Drink,
        name: 'Напитки',
        id: 'drinks',
    },
    {
        icon: Cracks,
        name: 'Закуски',
        id: 'cracks',
    },
    {
        icon: Combo,
        name: 'Комбо',
        id: 'combo',
    },
    {
        icon: Desert,
        name: 'Десерт',
        id: 'desert',
    },
    {
        icon: Sources,
        name: 'Соусы',
        id: 'sources',
    },
]

const sales = [
    {
        bgImg: Sales1,
        text: "3 средние пиццы от 999 рублей"
    },

    {
        bgImg: Sales2,
        text: "Кэшбек 10% на самовывоз (доставка)"
    },

    {
        bgImg: Sales1,
        text: "3 средние пиццы от 999 рублей"
    },

    {
        bgImg: Sales2,
        text: "Кэшбек 10% на самовывоз (доставка)"
    },
]


const HomePage = () => {
    const [pizzaData, setPizza] = useState([]);


    const fetchData = async () => {

        const response = await fetch(url)
        const data = await response.json()
        setPizza(data)
        console.log(data)
    }

    useEffect(() => {
        fetchData();
    }, [])

    if(pizzaData.length === 0) {
        return <h1 className={"text-center text-[44px]"}>Loading...</h1>
    }

    return (
        <div className={"container mx-auto"}>
            <div className={"flex gap-[30px]"}>
                {menu.map((m) => {
                    return (
                        <div
                            key={m.icon}
                            className={"w-[135px] h-[104px] border rounded-[12px] flex items-center justify-center flex-col"}>
                            <img src={m.icon} alt="photo"/>
                            <p>{m.name}</p>
                        </div>
                    )
                })}
            </div>


            <div className={"container flex gap-[28px] pl-[10px]"}>
                {sales.map((s, index) => {
                    return (
                        <div
                            key={index}
                            style={{
                                backgroundImage: `url(${s.bgImg})`,
                                backgroundSize: "cover",
                                borderRadius: "12px",
                                display: "flex",
                                alignItems: "end",
                            }}
                            className={"w-[300px] h-[343px] p-[20px] "}>
                            <p className={"text-white text-[20px] font-[600] w-[220px]"}>{s.text}</p>
                        </div>
                    )
                })}
            </div>


            <section id={"pizza"}>
                <h2>Пицца</h2>
                <div className={"flex flex-wrap gap-7 "}>
                    {pizzaData[0].pizza.map(pizzaItem => {
                        return (
                            <div key={pizzaItem.name}
                                 className={"w-[300px] h-[460px] mt-[40px] bg-white rounded-[14px]"}>
                                <div className={""}>
                                    <img className={"ml-[8px] w-[300px] h-[300px]"} src={pizzaItem.image}/>
                                </div>
                                <div className={"pr-4 pl-4"}>
                                    <h3 className={"text-[18px] font-[600]"}>{pizzaItem.name}</h3>
                                    <p className={"text-[16px] font-[400] h-16"}>{pizzaItem.desc}</p>
                                    <div className={"flex justify-between items-center"}>
                                        <button
                                            className={"w-[131px] h-[48px] bg-[#FF7010] text-[16px] font-[400] text-[#FFFFFF] rounded-[7px] mt-[10px]"}>Выбрать
                                        </button>
                                        <h6 className={"text-[18px] font-[600] text-[#FF7010] mt-[10px]"}>от {pizzaItem.price} ₽</h6>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </section>


            <section id={"sushi"}>
                <h2>Суши</h2>
                <div className={"flex flex-wrap gap-7 "}>
                    {pizzaData[0].sushi.map(sushiItem => {
                        return (
                            <div key={sushiItem.name}
                                 className={"w-[300px] h-[460px] mt-[40px] bg-white rounded-[14px]"}>
                                <div className={""}>
                                    <img className={"ml-[8px] w-[300px] h-[300px]"} src={sushiItem.image}
                                         alt="sushi img"/>
                                </div>
                                <div className={"pr-4 pl-4"}>
                                    <h3 className={"text-[18px] font-[600]"}>{sushiItem.name}</h3>
                                    <p className={"text-[16px] font-[400] h-16"}>{sushiItem.desc}</p>
                                    <div className={"flex justify-between items-center"}>
                                        <button
                                            className={"w-[131px] h-[48px] bg-[#FF7010] text-[16px] font-[400] text-[#FFFFFF] rounded-[7px] mt-[10px]"}>Выбрать
                                        </button>
                                        <h6 className={"text-[18px] font-[600] text-[#FF7010] mt-[10px]"}>от {sushiItem.price} ₽</h6>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </section>


            <section id={"snacks"}>
                <h2>Закуски</h2>
                <div className={"flex flex-wrap gap-7 "}>
                    {pizzaData[0].snacks.map(snacksItem => {
                        return (
                            <div key={snacksItem.name}
                                 className={"w-[300px] h-[460px] mt-[40px] bg-white rounded-[14px]"}>
                                <div className={""}>
                                    <img className={"ml-[8px] w-[300px] h-[300px]"} src={snacksItem.image}
                                         alt="snacks img"/>
                                </div>
                                <div className={"pr-4 pl-4"}>
                                    <h3 className={"text-[18px] font-[600]"}>{snacksItem.name}</h3>
                                    <p className={"text-[16px] font-[400] h-16"}>{snacksItem.desc}</p>
                                    <div className={"flex justify-between items-center"}>
                                        <button
                                            className={"w-[131px] h-[48px] bg-[#FF7010] text-[16px] font-[400] text-[#FFFFFF] rounded-[7px] mt-[10px]"}>Выбрать
                                        </button>
                                        <h6 className={"text-[18px] font-[600] text-[#FF7010] mt-[10px]"}>от {snacksItem.price} ₽</h6>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </section>


            <section id={"desserts"}>
                <h2>Десерты</h2>
                <div className={"flex flex-wrap gap-7 "}>
                    {pizzaData[0].desserts.map(desertsItem => {
                        return (
                            <div key={desertsItem.name}
                                 className={"w-[300px] h-[460px] mt-[40px] bg-white rounded-[14px]"}>
                                <div className={""}>
                                    <img className={"ml-[8px] w-[300px] h-[300px]"} src={desertsItem.image}
                                         alt="snacks img"/>
                                </div>
                                <div className={"pr-4 pl-4"}>
                                    <h3 className={"text-[18px] font-[600]"}>{desertsItem.name}</h3>
                                    <p className={"text-[16px] font-[400] h-16"}>{desertsItem.desc}</p>
                                    <div className={"flex justify-between items-center"}>
                                        <button
                                            className={"w-[131px] h-[48px] bg-[#FF7010] text-[16px] font-[400] text-[#FFFFFF] rounded-[7px] mt-[10px]"}>Выбрать
                                        </button>
                                        <h6 className={"text-[18px] font-[600] text-[#FF7010] mt-[10px]"}>от {desertsItem.price} ₽</h6>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </section>


            <section id={"drinks"}>
                <h2>Напитки</h2>
                <div className={"flex flex-wrap gap-7 "}>
                    {pizzaData[0].drinks.map(drinksItem => {
                        return (
                            <div key={drinksItem.name}
                                 className={"w-[300px] h-[460px] mt-[40px] bg-white rounded-[14px]"}>
                                <div className={""}>
                                    <img className={"ml-[8px] w-[300px] h-[300px]"} src={drinksItem.image}/>
                                </div>
                                <div className={"pr-4 pl-4"}>
                                    <h3 className={"text-[18px] font-[600]"}>{drinksItem.name}</h3>
                                    <p className={"text-[16px] font-[400] h-16"}>{drinksItem.desc}</p>
                                    <div className={"flex justify-between items-center"}>
                                        <button
                                            className={"w-[131px] h-[48px] bg-[#FF7010] text-[16px] font-[400] text-[#FFFFFF] rounded-[7px] mt-[10px]"}>Выбрать
                                        </button>
                                        <h6 className={"text-[18px] font-[600] text-[#FF7010] mt-[10px]"}>от {drinksItem.price} ₽</h6>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </section>


            <section id={"sauces"}>
                <h2>Соусы</h2>
                <div className={"flex flex-wrap gap-7 "}>
                    {pizzaData[0].sauces.map(saucesItem => {
                        return (
                            <div key={saucesItem.name}
                                 className={"w-[300px] h-[460px] mt-[40px] bg-white rounded-[14px]"}>
                                <div className={""}>
                                    <img className={"ml-[8px] w-[300px] h-[300px] mt-6"} src={saucesItem.image}
                                         alt="snacks img"/>
                                </div>
                                <div className={"pr-4 pl-4 mt-[30px]"}>
                                    <h3 className={"text-[18px] font-[600]"}>{saucesItem.name}</h3>
                                    <div className={"flex justify-between items-center"}>
                                        <button
                                            className={"w-[131px] h-[48px] bg-[#FF7010] text-[16px] font-[400] text-[#FFFFFF] rounded-[7px] mt-[10px]"}>Выбрать
                                        </button>
                                        <h6 className={"text-[18px] font-[600] text-[#FF7010] mt-[10px]"}>от {saucesItem.price} ₽</h6>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </section>


            <section id={"combo"}>
                <h2>Комбо</h2>
                <div className={"flex flex-wrap gap-7 "}>
                    {pizzaData[0].combo.map(comboItem => {
                        return (
                            <div key={comboItem.name}
                                 className={"w-[300px] h-[460px] mt-[40px] bg-white rounded-[14px]"}>
                                <div className={""}>
                                    <img className={"ml-[8px] w-[300px] h-[300px]"} src={comboItem.image}
                                         alt="snacks img"/>
                                </div>
                                <div className={"pr-4 pl-4"}>
                                    <h3 className={"text-[18px] font-[600]"}>{comboItem.name}</h3>
                                    <p className={"text-[16px] font-[400] h-16"}>{comboItem.desc}</p>
                                    <div className={"flex justify-between items-center"}>
                                        <button
                                            className={"w-[131px] h-[48px] bg-[#FF7010] text-[16px] font-[400] text-[#FFFFFF] rounded-[7px] mt-[10px]"}>Выбрать
                                        </button>
                                        <h6 className={"text-[18px] font-[600] text-[#FF7010] mt-[10px]"}>от {comboItem.price} ₽</h6>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
        ;
};

export default HomePage;



// /echo "# pizza" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/nurbolot2006/pizza.git
//     git push -u origin main