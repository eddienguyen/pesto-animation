import React from "react";
import { IoIosClose } from 'react-icons/io';
import "./styles.scss";
export default ({ expanded = false, goBack = null, recipe, ...rest }) => {

    const {
        mainImageUrl,
        ingredientsIconUrl,
        name,
        author,
        description,
        ingredients
    } = recipe;

    return (
        <div className="recipe" {...rest}>
            <div className="header">
                <img src={mainImageUrl} alt={name} />
                <span
                    onClick={goBack}
                    className="action"
                >
                    <IoIosClose
                        fill="#ffffff"
                        size="32"
                    />
                </span>
            </div>
            <div className="title">
                <img src={ingredientsIconUrl} alt="icon" />
                <div className="cardTitle">
                    <h3>{name}</h3>
                    <span>{author}</span>
                </div>
            </div>
            {expanded && (
                <>
                    <div className="text">{description}</div>
                    <div>
                        {ingredients.map((ingredient, index) =>
                            (
                                <div key={index} className="ingredient">
                                    <span className="amount">{ingredient.amount}</span>
                                    <p>{ingredient.description}</p>
                                </div>
                            )
                        )}
                    </div>
                </>
            )}
        </div>
    );
};
