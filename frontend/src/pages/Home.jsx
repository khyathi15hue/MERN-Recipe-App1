import React from 'react'

const Home = () => {
  return (
    
    <div style={{ 
      backgroundImage: "url(https://images.healthshots.com/healthshots/en/uploads/2021/08/17180017/rajat-sarki-nnNCCQfSNsc-unsplash-1600x900.jpg)", 
      backgroundSize: "cover", 
      backgroundPosition: "center", 
      minHeight: "100vh", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center" 
    }}>
      
      <div className="d-flex flex-wrap justify-content-center gap-4 p-4">
        {[ 
          { img: "https://kohinoor-joy.com/wp-content/uploads/2020/11/veg-pulao.jpg", title: "Veg Recipes", text: "Explore a variety of delicious vegetarian recipes with fresh ingredients." },
          { img: "https://img.freepik.com/premium-photo/dum-handi-chicken-biryani-is-prepared-earthen-clay-pot-called-haandi-popular-indian-non-vegetarian-food_466689-52231.jpg?w=2000", title: "Non-Veg Recipes", text: "Try mouth-watering non-vegetarian dishes packed with flavors." },
          { img: "https://img.freepik.com/premium-photo/starter-snack-paneer-tikka-with-stick-plate-with-green-chutney-isolated-white-indian-cuisine-dish-with-grilled-cottage-cheese-with-vegetables-spices_466689-1199.jpg", title: "Veg Starters", text: "Tasty vegetarian appetizers to start your meal right." },
          { img: "https://www.giggsmeat.com/wp-content/uploads/2020/10/c7eAOTguRx.jpg", title: "Non-Veg Starters", text: "Delicious non-vegetarian appetizers to satisfy your cravings." },
          { img:"https://wallpaperaccess.com/full/1306006.jpg", title: "Breakfast Recipes", text: "Start your day with nutritious and delicious breakfast options." }
        ].map((recipe, index) => (
          <div key={index} className="card position-relative" style={{ width: "18rem", overflow: "hidden", transition: "transform 0.3s" }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}>
            <img src={recipe.img} className="card-img-top" alt={recipe.title} style={{ height: "200px", objectFit: "cover" }} />
            <div className="card-body text-center">
              <h5 className="card-title">{recipe.title}</h5>
              <p className="card-text position-absolute top-50 start-50 translate-middle text-white bg-dark p-2 rounded" style={{ opacity: 0, transition: "opacity 0.3s" }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = "1"}
                onMouseLeave={(e) => e.currentTarget.style.opacity = "0"}>{recipe.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Home
