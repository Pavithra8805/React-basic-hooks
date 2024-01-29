import React, { useEffect, useState } from "react";

const UseEffect = () => {
    const [effect, setEffect] = useState(false);

    useEffect(() => {
        if (effect) alert("Content Button Clicked");
    }, [effect]);

    return (
        <div>
            {effect ? (
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem itaque dicta, non quam quibusdam iusto recusandae enim distinctio quia odio animi, repellendus doloribus facere quod aspernatur velit, ab inventore. Assumenda.
                </p>
            ) : null}

            <button onClick={() => setEffect(!effect)}>Content</button>
        </div>
    );

};

export default UseEffect;