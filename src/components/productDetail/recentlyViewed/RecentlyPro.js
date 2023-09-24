import React from 'react'
import './RecentlyPro.css'

export default function RecentlyPro() {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-2 sm:px-4 py-6 sm:py-15 mx-auto">
          <h1 className="topic_title">Recently viewed products</h1>
          <div class="flex flex-wrap -mx-2 screen_md:-mx-4 -mb-10 text-center md:mx-5">
            <div class="w-full sm:w-1/2 md:w-1/4 mb-10 px-10 sm:px-1 mx-auto">
              <div class="rounded-lg h-64 overflow-hidden">
                <img alt="content" class="object-cover object-center h-full w-full" src="https://www.dogfood.com.my/wp-content/uploads/2022/03/daily-diet-dog-food-1.jpg" />
              </div>
              <h2 class="recently_cards__title">Buy YouTube Videos</h2>
              <p class="recently_pro_prices">$350.00</p>
              <div class="related_cards__overlay__frame">
                <button className='button_design'>
                  Select Options
                </button>

              </div>
            </div>
            <div class="w-full sm:w-1/2 md:w-1/4 mb-10 px-10 sm:px-1 mx-auto">
              <div class="rounded-lg h-64 overflow-hidden">
                <img alt="content" class="object-cover object-center h-full w-full" src="https://unisa.edu.au/siteassets/media-centre/images/media-release-images/2023/-pig_500-x-500-resized.jpg" />
              </div>
              <h2 class="recently_cards__title">The Catalyzer</h2>
              <p class="recently_pro_prices">$350.00</p>
              <div class="related_cards__overlay__frame">
                <button className='button_design'>
                  Select Options
                </button>

              </div>
            </div>
            <div class="w-full sm:w-1/2 md:w-1/4 mb-10 px-10 sm:px-1 mx-auto">
              <div class="rounded-lg h-64 overflow-hidden">
                <img alt="content" class="object-cover object-center h-full w-full" src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg" />
              </div>
              <h2 class="recently_cards__title">Buy YouTube Videos</h2>
              <p class="recently_pro_prices">$350.00</p>
              <div class="related_cards__overlay__frame">
                <button className='button_design'>
                  Select Options
                </button>

              </div>
            </div>
            <div class="w-full sm:w-1/2 md:w-1/4 mb-10 px-10 sm:px-0 mx-auto">
              <div class="rounded-lg h-64 overflow-hidden">
                <img alt="content" class="object-cover object-center h-full w-full" src="https://i.natgeofe.com/k/75ac774d-e6c7-44fa-b787-d0e20742f797/giant-panda-eating_4x3.jpg" />
              </div>
              <h2 class="recently_cards__title">The Catalyzer</h2>
              <p class="recently_pro_prices">$350.00</p>
              <div class="related_cards__overlay__frame">
                <button className='button_design'>
                  Select Options
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
