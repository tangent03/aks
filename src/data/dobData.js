const dateData = [
  { date: 1 },
  { date: 2 },
  { date: 3 },
  { date: 4 },
  { date: 5 },
  { date: 6 },
  { date: 7 },
  { date: 8 },
  { date: 9 },
  { date: 10 },
  { date: 11 },
  { date: 12 },
  { date: 13 },
  { date: 14 },
  { date: 15 },
  { date: 16 },
  { date: 17 },
  { date: 18 },
  { date: 19 },
  { date: 20 },
  { date: 21 },
  { date: 22 },
  { date: 23 },
  { date: 24 },
  { date: 25 },
  { date: 26 },
  { date: 27 },
  { date: 28 },
  { date: 29 },
  { date: 30 },
  { date: 31 },
];
const monthData = [
  { month: 1, name: "Jan", noOfDays: 31 },
  { month: 2, name: "Feb", noOfDays: 28 },
  { month: 3, name: "Mar", noOfDays: 31 },
  { month: 4, name: "Apr", noOfDays: 30 },
  { month: 5, name: "May", noOfDays: 31 },
  { month: 6, name: "Jun", noOfDays: 30 },
  { month: 7, name: "Jul", noOfDays: 31 },
  { month: 8, name: "Aug", noOfDays: 31 },
  { month: 9, name: "Sep", noOfDays: 30 },
  { month: 10, name: "Oct", noOfDays: 31 },
  { month: 11, name: "Nov", noOfDays: 30 },
  { month: 12, name: "Dec", noOfDays: 31 },
];
const yearData = [
  { year: 1875 },
  { year: 1876 },
  { year: 1877 },
  { year: 1878 },
  { year: 1879 },
  { year: 1880 },
  { year: 1881 },
  { year: 1882 },
  { year: 1883 },
  { year: 1884 },
  { year: 1885 },
  { year: 1886 },
  { year: 1887 },
  { year: 1888 },
  { year: 1889 },
  { year: 1890 },
  { year: 1891 },
  { year: 1892 },
  { year: 1893 },
  { year: 1894 },
  { year: 1895 },
  { year: 1896 },
  { year: 1897 },
  { year: 1898 },
  { year: 1899 },
  { year: 1900 },
  { year: 1901 },
  { year: 1902 },
  { year: 1903 },
  { year: 1904 },
  { year: 1905 },
  { year: 1906 },
  { year: 1907 },
  { year: 1908 },
  { year: 1909 },
  { year: 1910 },
  { year: 1911 },
  { year: 1912 },
  { year: 1913 },
  { year: 1914 },
  { year: 1915 },
  { year: 1916 },
  { year: 1917 },
  { year: 1918 },
  { year: 1919 },
  { year: 1920 },
  { year: 1921 },
  { year: 1922 },
  { year: 1923 },
  { year: 1924 },
  { year: 1925 },
  { year: 1926 },
  { year: 1927 },
  { year: 1928 },
  { year: 1929 },
  { year: 1930 },
  { year: 1931 },
  { year: 1932 },
  { year: 1933 },
  { year: 1934 },
  { year: 1935 },
  { year: 1936 },
  { year: 1937 },
  { year: 1938 },
  { year: 1939 },
  { year: 1940 },
  { year: 1941 },
  { year: 1942 },
  { year: 1943 },
  { year: 1944 },
  { year: 1945 },
  { year: 1946 },
  { year: 1947 },
  { year: 1948 },
  { year: 1949 },
  { year: 1950 },
  { year: 1951 },
  { year: 1952 },
  { year: 1953 },
  { year: 1954 },
  { year: 1955 },
  { year: 1956 },
  { year: 1957 },
  { year: 1958 },
  { year: 1959 },
  { year: 1960 },
  { year: 1961 },
  { year: 1962 },
  { year: 1963 },
  { year: 1964 },
  { year: 1965 },
  { year: 1966 },
  { year: 1967 },
  { year: 1968 },
  { year: 1969 },
  { year: 1970 },
  { year: 1971 },
  { year: 1972 },
  { year: 1973 },
  { year: 1974 },
  { year: 1975 },
  { year: 1976 },
  { year: 1977 },
  { year: 1978 },
  { year: 1979 },
  { year: 1980 },
  { year: 1981 },
  { year: 1982 },
  { year: 1983 },
  { year: 1984 },
  { year: 1985 },
  { year: 1986 },
  { year: 1987 },
  { year: 1988 },
  { year: 1989 },
  { year: 1990 },
  { year: 1991 },
  { year: 1992 },
  { year: 1993 },
  { year: 1994 },
  { year: 1995 },
  { year: 1996 },
  { year: 1997 },
  { year: 1998 },
  { year: 1999 },
  { year: 2000 },
  { year: 2001 },
  { year: 2002 },
  { year: 2003 },
  { year: 2004 },
  { year: 2005 },
  { year: 2006 },
  { year: 2007 },
  { year: 2008 },
  { year: 2009 },
  { year: 2010 },
  { year: 2011 },
  { year: 2012 },
  { year: 2013 },
  { year: 2014 },
  { year: 2015 },
  { year: 2016 },
  { year: 2017 },
  { year: 2018 },
  { year: 2019 },
  { year: 2020 },
  { year: 2021 },
  { year: 2022 },
  { year: 2023 },
  { year: 2024 },
  { year: 2025 },
];

export { dateData, monthData, yearData };
