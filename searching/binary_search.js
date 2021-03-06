// টেস্ট এ্যারে
const list = Array(500).fill(1).map((x, y) => x + y);

// বাইনারী সার্চ ফাংশনে একটা সর্টেড এ্যারে (আমি পাইথনে অভ্যস্ত হওয়ায় লিস্ট বলি সব সময়) পাঠাবো, আর যে ভ্যালু খুজঁছি সেটা
function binarySearch(list, value) {
    /*
        বাইনারী সার্চের মূলমন্ত্র হইতেছে আমি আমার ডাটাসেট কে দুই ভাগে ভাগ করে ফেলবো । আমার লিস্ট যেহেতু সর্টেড সেহেতু ভ্যালুটা যে কোন এক ভাগে
        পড়বে । যেই আইটেম খুজঁছি সেটাকে এই দুই ভাগের মিডল পয়েন্টে যে ভ্যালু আছে তার সাথে তুলনা করলেই আমরা বুঝতে পারবো আমাদের
        কাঙ্খিত ভ্যালু কোন ভাগে পড়েছে । পরের ধাপে আমরা শুধু সেই ভাগ নিয়ে কাজ করতে পারবো, বাকি অর্ধেক নিয়ে আমাদের আর টেনশন করতে হবে না ।

        বাইনারী সার্চের বড় সুবিধা আমরা নিমিষেই আমাদের সার্চের স্কোপ অর্ধেক করে ফেলছি । এইভাবে বার বার ভাগ করতে থাকলে আমরা খুব দ্রুতই
        আমাদের কাঙ্খিত আইটেম টি খুজেঁ পাবো ।

        আমাদের লিস্ট এ যদি ৮টি আইটেম থাকে তাহলে আমরা প্রথম স্টেপের পর ৪টি আইটেম পাবো, তারপর দুইটি এবং শেষে একটি । মাত্র ৩ ধাপে
        সার্চ করা শেষ । এইখানে লক্ষ্যনীয় 2^3 = 8, অর্থাৎ বার বার ২ ভাগ করতে থাকলে N সংখ্যক আইটেম থেকে যে কোন ভ্যালু খুজেঁ পেতে আমাদের
        সর্বোচ্চ সময় লাগতে পারে logN (2 based) - এইটা আসলে কত ফাস্ট তা বোঝা যাবে অনেক বড় ডাটাসেট নিয়ে কাজ করতে গেলে ।

        তবে মনে রাখতে হবে বাইনারী সার্চ কাজ করে যদি এ্যারেটা অর্ডার্ড বা সর্টেড হয় । সেটা নাহলে আসলে দুই ভাগ করলেও ভ্যালু গুলো ছড়িয়ে ছিটিয়ে থাকবে,
        মিডল পয়েন্ট দেখে বোঝার উপায় থাকবে না আমাদের ভ্যালু কোন পাশে আছে ।

     */


    // শুরুতে আমরা মিডল পয়েন্ট খুজঁবো, সেজন্য লোয়ার ইনডেক্স হবে 0 আর হায়ার ইনডেক্স হবে শেষ ইনডেক্স
    let low = 0;
    let high = list.length - 1;


    while (low <= high) {
        // মিডল পয়েন্ট বের করে ফ্লোর করে নিলাম যাতে ইন্টিজার থাকে
        let mid = Math.floor((low + high) / 2);
        let midValue = list[mid];

        // ভ্যালু খুজেঁ পেয়েছি, পজিশন রিটার্ন করে দেই
        if (value == midValue) {
            return mid;
        }

        // ভ্যালুটা আসলে উপরের অংশে আছে, তাই লোয়ার ইনডেক্স টা বাড়িয়ে মিডল পয়েন্টে নিয়ে আসি
        // তাতে আর বাকি ভাগ নিয়ে চিন্তা করতে না হয় ।
        if (value > midValue) {
            low = mid + 1;
        }

        // ভ্যালুটা আসলে নিচের অর্ধেকে আছে, তাই হায়ার ইনডেক্স টা কমিয়ে মিডল পয়েন্টের নিচে নিয়ে আসি
        if (value < midValue) {
            high = mid - 1;
        }

    }

    // কিছু পাওয়া যায় নাই :(
    return null;
}

// খোজঁ - দ্যা সার্চ
const result = binarySearch(list, 23);


console.log(result);