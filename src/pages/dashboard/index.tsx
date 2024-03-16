import React, { useEffect, useState } from "react";
import ic_profile from "../../assets/icons/ic_profile_header.svg";
import ic_profile_notification from "../../assets/icons/ic_notification_header.svg";
import img_sort from "../../assets/icons/img_sort.png"
import { Container } from "./styles.ts";
import AccordionHeader from "../../components/AccordionHeader/index.tsx";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [filteredValues, setFilteredValues] = useState([]);
  const [checkedValues, setCheckedValues] = useState([]);
  const [search, setSearch] = useState("");
  const [secondarySearch, setSecondarySearch] = useState("");

  const [accData, setAccData] = useState<any>({
    lists: [],
    show: false,
  });

  useEffect(() => {
    fetch("http://demo2146080.mockable.io/jobs")
      .then((response) => response.json())
      .then((data) => {
        const addedFilterKeys = data?.map((x: any) => ({
          ...x,
          filterKeys: [
            x?.company_name,
            x?.address,
            x?.posted_on,
            x?.salaray_range,
            x?.skill,
            x?.experience,
            x?.education,
          ],
        }));
        setData(addedFilterKeys);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const searchResult = filteredValues.filter((x: any) =>
      x?.role
        .toLowerCase()
        .includes(
          secondarySearch?.length > 0
            ? secondarySearch.toLowerCase()
            : search.toLowerCase()
        )
    );
    setFilteredValues(searchResult);
  }, [search, secondarySearch]);

  useEffect(() => {
    const filterValue = (key) => {
      const arr = data?.map((x: any, index) => ({
        id: index,
        completed: false,
        title:
          key === "company_name"
            ? x?.company_name
            : key === "address"
            ? x?.address
            : key === "posted_on"
            ? x?.posted_on
            : key === "salaray_range"
            ? x?.salaray_range
            : key === "skill"
            ? x?.skill
            : key === "experience"
            ? x?.experience
            : x?.education,
      }));

      const uniqueTitles: string[] = [];
      const uniqueData = arr.filter((item) => {
        if (!uniqueTitles.includes(item.title)) {
          uniqueTitles.push(item.title);
          return true;
        }
        return false;
      });
      return uniqueData;
    };

    const filterData = [
      {
        id: 0,
        active: true,
        name: "Company",
        innerList: filterValue("company_name"),
      },
      {
        id: 1,
        active: true,
        name: "Location",
        innerList: filterValue("address"),
      },
      {
        id: 2,
        active: true,
        name: "Date Posted",
        innerList: filterValue("posted_on"),
      },
      {
        id: 3,
        active: true,
        name: "Salary Range",
        innerList: filterValue("salaray_range"),
      },
      {
        id: 4,
        active: true,
        name: "Skills",
        innerList: filterValue("skill"),
      },
      {
        id: 5,
        active: true,
        name: "Experience",
        innerList: filterValue("experience"),
      },
      {
        id: 6,
        active: true,
        name: "Education",
        innerList: filterValue("education"),
      },
    ];
    setAccData({
      lists: filterData,
      show: false,
    });
  }, [data]);

  useEffect(() => {
    const checkedValues = accData?.lists?.map((x: any) =>
      x?.innerList
        ?.filter((value: any) => value?.completed)
        .map((z: any) => z?.title)
    );
    const concatedArray = [].concat(...checkedValues);
    setCheckedValues(concatedArray);
    if (concatedArray?.length > 0) {
      const filteredData = data.filter((item: any) => {
        return concatedArray.every((criteria) =>
          item.filterKeys.includes(criteria)
        );
      });
      setSearch("");
      setSecondarySearch("")
      setFilteredValues(filteredData);
    } else if (search.length === 0 && secondarySearch.length === 0) {
      setFilteredValues(data);
    }
  }, [accData, filteredValues, data]);

  const handleChange = (selectedList) => (e) => {
    const { checked, name } = e.target;
    setAccData((prevState): any => ({
      lists: prevState.lists.map((list) =>
        list.id === selectedList.id
          ? {
              ...list,
              innerList: list.innerList.map((fruite) =>
                fruite.title === name
                  ? {
                      ...fruite,
                      completed: checked,
                    }
                  : fruite
              ),
            }
          : list
      ),
    }));
  };

  const handleTile = (list) => {
    setAccData((prevState): any => ({
      lists: prevState.lists.map((item) =>
        item.id === list.id ? { ...item, active: !item.active } : item
      ),
    }));
  };

  const onClear = () => {
    setAccData(() => ({
      lists: accData.lists.map((list) => ({
        ...list,
        innerList: list.innerList.map((fruite) => ({
          ...fruite,
          completed: false,
        })),
      })),
    }));
    setFilteredValues(data);
  };
  const onChangeData = (e) => {
    setSearch(e.target.value);
    onClear();
    setSecondarySearch("");
  };
  const onChangeDataSecondary = (e) => {
    setSecondarySearch(e.target.value);
    setSearch("");
    onClear();
  };
  const renderJobCard = (item) => {
    const {
      role,
      company_name,
      address,
      posted_on,
      image_url,
      id,
      noOfApplicants,
      skillMatch,
    } = item || {};
    return (
      <div className="card-wrapper" key={id}>
        <section className="job-detail-container">
          <img src={image_url} width={40} height={40} alt="logo" />

          <section className="role-container">
            <h4 className="job-role">{role}</h4>
            <p className="place-details">{company_name}</p>
            <p className="city">{address}</p>
          </section>
          <section className="progress-percentage-wrapper">
            <p>Skill match</p>
            <svg className="progress-ring" viewBox="0 0 120 120">
              <circle
                className="progress-ring__circle--background"
                cx="60"
                cy="60"
                r="50"
              ></circle>
              <circle
                className="progress-ring__circle"
                cx="60"
                cy="60"
                r="50"
                stroke-dasharray="314"
                stroke-dashoffset="157"
              ></circle>
              <text className="progress-ring__text" x="60" y="70" fill="white">
                {skillMatch}
              </text>
            </svg>
          </section>
        </section>
        <section className="date-container">
          <p className="createdDate">
            Posted {posted_on} <span className="dot-container">.</span>
            <span className="count-of-applicants">
              {noOfApplicants} applicants
            </span>
          </p>
          <section className="action-wrapper">
            <button className="apply-button">Apply Now</button>
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/parakeet-line/32/FFFFFF/bookmark-ribbon.png"
              alt="save"
            />
          </section>
        </section>
      </div>
    );
  };
  return (
    <Container>
      <div style={{ color: "white" }}>
        <header className="header-wrapper">
          <div className="header-container">
            <h3>Jobs</h3>
            <div className="search-container">
              <input
                type="text"
                id="search-input"
                placeholder="Search"
                onChange={onChangeData}
                value={search}
              />
            </div>
            <div className="icon-wrapper">
              <img src={ic_profile} alt="profile" className="icons" />
              <img
                src={ic_profile_notification}
                alt="profile-notification"
                className="icons"
              />
            </div>
          </div>
        </header>
        <section className="body-section">
          <div className="body-wrapper">
            <div className="filter-container">
              <div className="filter-head">
                <h5>Filter by</h5>
                <div className="filter-action">
                  <span>{checkedValues?.length} filters applied.</span>
                  <span onClick={onClear} className="clear-text">
                    Clear all
                  </span>
                </div>
              </div>
              <hr className="horizon-line" />
              {accData?.lists.map((ar, index) => (
                <div className="accordian-wrapper" key={index}>
                  <AccordionHeader
                    active={ar.active}
                    index={index}
                    name={ar?.name}
                    onClick={() => handleTile(ar)}
                  />
                  {ar.active &&
                    ar.innerList.map((inner) => (
                      <div key={inner.id} className="checkbox-wrapper">
                        <input
                          type="checkbox"
                          onChange={handleChange(ar)}
                          checked={inner.completed}
                          name={inner.title}
                          id={inner.title}
                          className="custom-checkbox"
                        />
                        <label>{inner.title}</label>
                      </div>
                    ))}
                  {accData?.lists?.length !== index + 1 && ar.active && (
                    <hr className="horizon-line" />
                  )}
                </div>
              ))}
            </div>
            <div className="secondary-container">
              <div className="secondary-header">
              <div className="search-count-container">
                <h1>SEARCH RESULTS / </h1>
                <span>JOBS - {filteredValues?.length} results</span>
              </div>
              <img src={img_sort} alt="sort"/>
              </div>
              <div className="card-container">
                <div className="search-container">
                  <input
                    type="text"
                    id="search-input"
                    placeholder="Search"
                    onChange={onChangeDataSecondary}
                    value={secondarySearch}
                    className="secondary-search"
                  />
                </div>
                {filteredValues?.length > 0 ? (
                  filteredValues?.map(renderJobCard)
                ) : (
                  <>
                    <h1 className="empty-container">No Jobs Found</h1>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default Dashboard;
