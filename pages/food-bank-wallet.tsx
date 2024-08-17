// pages/food-bank-wallet.tsx
import React from "react";
import Header from "@/src/component/custom/Header";
import HeroFoodBank from "@/src/component/custom/HeroFoodBank";
import DonateBox from "@/src/component/custom/DonateBox";
import { Component as BarChartComponent } from "@/src/component/custom/BarChart";
import './globalss.css';

export default function FoodBankWallet() {
  return (
    <>
      <Header />
      <HeroFoodBank />
      <DonateBox />
      <div className="container mx-auto px-6">
        <BarChartComponent />
      </div>
    </>
  );
}
