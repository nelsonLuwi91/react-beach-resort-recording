import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

import Title from "./Title";

export default class extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "free cocktails",
                info: "Irure sit sit duis tempor deserunt culpa. Mollit culpa nisi deserunt Lorem est non sint sint anim."
            },
            {
                icon: <FaHiking />,
                title: "free hiking",
                info: "Irure sit sit duis tempor deserunt culpa. Mollit culpa nisi deserunt Lorem est non sint sint anim."
            },
            {
                icon: <FaShuttleVan />,
                title: "free shuttle",
                info: "Irure sit sit duis tempor deserunt culpa. Mollit culpa nisi deserunt Lorem est non sint sint anim."
            },
            {
                icon: <FaBeer />,
                title: "Strongest beer",
                info: "Irure sit sit duis tempor deserunt culpa. Mollit culpa nisi deserunt Lorem est non sint sint anim."
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {
                        this.state.services.map((item, index) => {
                            return (
                                <article key={index} className="service">
                                    <span>{item.icon}</span>
                                    <h6>{item.title}</h6>
                                    <p>{item.info}</p>
                                </article>
                            );
                        })
                    }
                </div>
            </section>
        );
    };
};
