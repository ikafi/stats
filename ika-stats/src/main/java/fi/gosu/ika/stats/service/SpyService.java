package fi.gosu.ika.stats.service;

import fi.gosu.ika.stats.domain.SpyReport;
import fi.gosu.ika.stats.domain.Town;
import fi.gosu.ika.stats.repository.SpyReportRepository;
import fi.gosu.ika.stats.repository.TownRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * SpyReport Service
 *
 * @author Joppe151617
 * @since 0.1.0
 */
@Service
public class SpyService {

    @Autowired private SpyReportRepository spyReportRepository;
    @Autowired private TownRepository townRepository;

    public List<SpyReport> findAllReports() {
        return spyReportRepository.findAll();
    }
    public List<Town> findAllTowns() { return townRepository.findAll();}

    public SpyReport addSpyReport(SpyReport spyReport) {
        SpyReport oldSpyReport = spyReportRepository.findBySpyReportId(spyReport.getSpyReportId());
        if (oldSpyReport == null) {
            return spyReportRepository.save(spyReport);
        }
        return null;
    }
    public Town addTown(Town town) {
        return townRepository.save(town);
    }

    public SpyReport findOneReport(Long id) {
        return spyReportRepository.findOne(id);
    }
    public Town findOneTown(Long id) { return townRepository.findOne(id);}
}
