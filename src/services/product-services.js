import {
  collection,
  getDocs,
  getDoc,
  updateDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../config/firestore";

export const getAllProducts = async () => {
  const collectionRef = collection(db, "products");
  const querySnapshot = await getDocs(collectionRef);

  console.log("querySnapshot", querySnapshot);
  const products = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  console.log("products", products);
  return products;
};

export const getProductById = async (id) => {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) {
    throw new Error("Product not found" + id);
  }

  return { id: docSnap.id, ...docSnap.data() };
};

export const updateProductFavouriteStatus = async (id, newFavouriteStatus) => {
  const docRef = doc(db, "products", id);
  // const docSnap = await getDoc(docRef);
  await updateDoc(docRef, { favourite: newFavouriteStatus });
  return { id: id, favourite: newFavouriteStatus };
};

export const getFavouriteProducts = async () => {
  const productCollectionRef = collection(db, "products");

  const favouriteProductQuery = query(
    productCollectionRef,
    where("favourite", "==", true)
  );

  const querySnapshot = await getDocs(favouriteProductQuery);

  const favouriteProducts = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return favouriteProducts;
};

export const getFeaturedProducts = async (brand = null) => {
  try {
    const productCollectionRef = collection(db, "products");

    const featuredProductQuery = query(
      productCollectionRef,
      where("isFeatured", "==", true)
    );

    const querySnapshot = await getDocs(featuredProductQuery);

    let featuredProducts = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    if (brand && (brand === "samsung" || brand === "iphone")) {
      featuredProducts = featuredProducts.filter((product) =>
        product.name.toLowerCase().includes(brand.toLowerCase())
      );
    }
    return featuredProducts;
  } catch (error) {
    console.error("Error in getFeaturedProducts:", error);
    throw error;
  }
};
